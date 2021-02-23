import React, { createRef, useEffect, useState } from "react";
import { Button, Input, Progress, Spinner, Table } from "reactstrap";
import "./App.css";
import Graph from "./components/Graph";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactPaginate from "react-paginate";

interface ILogLineProperties {
  SourceContext: string;
  ElapsedMilliseconds: number;
  MetricName: string;
  WorkItemKey: string;
  ConcurrentTaskIndex: number;
  WorkerSessionId: string;
  WorkerName: string;
  AssemblyName: string;
  AssemblyVersion: string;
  MachineName: string;
  EnvironmentUserName: string;
  ApplicationSessionId: string;
}

class LogLine {
  Timestamp: Date = new Date();
  Level: string = "";
  Message: string = "";
  Exception: string = "";
  Id: number = 0;
  Properties: ILogLineProperties | null = null;
}

const format = (str: string, obj: any): string => {
  Object.keys(obj).forEach((key) => {
    str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), obj[key]);
  });

  return str;
};

function App() {
  const fileInput = createRef<HTMLInputElement>();
  const [fileLines, setFileLines] = useState<string[]>([]);
  const [logLines, setLogLines] = useState<LogLine[]>([]);

  const [exceptions, setExceptions] = useState(new Map<string, number>());
  const [workers, setworkers] = useState(new Map<string, number>());

  const [loading, setLoading] = useState(false);

  const [filterExceptions, setFilterExceptions] = useState<string[]>([]);
  const [filterWorkers, setFilterWorkers] = useState<string[]>([]);
  const [filterStartDate, setFilterStartDate] = useState<Date>(new Date(0));
  const [filterEndDate, setFilterEndDate] = useState<Date>(new Date(0));

  const [viewLogLines, setViewLogLines] = useState<LogLine[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(0);

  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [loadingTotal, setLoadingTotal] = useState<number>(0);

  useEffect(() => {
    if (loading) return;

    var objects = fileLines
      .filter((l) => l.trim().length > 0)
      .map<LogLine | null>((l, i) => {
        try {
          const obj = JSON.parse(l);
          return {
            Timestamp: new Date(obj.Timestamp),
            Level: obj.Level,
            Message: format(obj.MessageTemplate, obj.Properties),
            Exception: obj.Exception,
            Id: i,
            Properties: obj.Properties,
          };
        } catch {
          return null;
        }
      })
      .filter((l) => l !== null)
      .map<LogLine>((l) => l!);

    const newExceptions = new Map<string, number>();
    const newWorkers = new Map<string, number>();

    for (let log of objects) {
      if (log.Exception) {
        let exception = log.Exception.split(" ")[0];
        if (newExceptions.has(exception))
          newExceptions.set(exception, newExceptions.get(exception)! + 1);
        else newExceptions.set(exception, 1);
      }

      let worker = (log.Properties?.WorkerName ?? "General") + " " + log.Level;
      if (newWorkers.has(worker))
        newWorkers.set(worker, newWorkers.get(worker)! + 1);
      else newWorkers.set(worker, 1);
    }

    setExceptions(newExceptions);
    setFilterExceptions(Array.from(newExceptions.keys()));

    setworkers(newWorkers);
    setFilterWorkers(Array.from(newWorkers.keys()));

    if (objects.length > 0) {
      setFilterStartDate(objects[0].Timestamp);
      setFilterEndDate(objects[objects.length - 1].Timestamp);
    }

    setLogLines(objects);
  }, [fileLines, loading]);

  useEffect(() => {
    setViewLogLines(
      logLines.filter(
        (l) =>
          (!l.Exception ||
            filterExceptions.includes(l.Exception.split(" ")[0])) &&
          filterWorkers.includes(
            (l.Properties?.WorkerName ?? "General") + " " + l.Level
          ) &&
          filterStartDate !== new Date(0) &&
          l.Timestamp >= filterStartDate &&
          filterEndDate !== new Date(0) &&
          l.Timestamp <= filterEndDate
      )
    );
  }, [
    logLines,
    filterExceptions,
    filterWorkers,
    filterStartDate,
    filterEndDate,
  ]);

  const loadFile = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFileLines([]);
    const file = fileInput.current!.files![0];
    const chunkSize = 1024 * 1024 * 100;
    const totalChunks = file.size / chunkSize + 1;
    let currentChunk = 0;
    setLoadingProgress(0);
    setLoadingTotal(totalChunks);
    setLoading(true);
    const reader = new FileReader();
    reader.addEventListener("error", (event) => {
      console.error("Can not load file", event);
      setLoading(false);
      setFileLines([]);
    });
    reader.addEventListener("load", (event) => {
      const lines = (event.target?.result as string).split("\n");
      setFileLines((l) => [...l, ...lines]);
      currentChunk++;
      console.log(currentChunk, totalChunks);
      if (currentChunk > totalChunks) {
        setLoading(false);
      } else {
        setLoadingProgress(currentChunk);
        reader.readAsText(
          file.slice(
            currentChunk * chunkSize,
            Math.min(currentChunk * chunkSize + chunkSize, file.size)
          )
        );
      }
    });

    reader.readAsText(file.slice(0, Math.min(file.size, chunkSize)));
  };

  return (
    <div className="app">
      <input type="file" ref={fileInput} disabled={loading} accept=".json" />
      <Button onClick={loadFile} disabled={loading}>
        Load
      </Button>
      {loading ? (
        <div style={{ width: "70%" }}>
          <Spinner color="info" />
          <Progress
            value={(loadingProgress / loadingTotal) * 100}
            max={100}
            style={{ width: "100%" }}
          >
            {Math.round((loadingProgress / loadingTotal) * 100)}%
          </Progress>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <Graph LogLines={viewLogLines} Workers={filterWorkers} />
          <div className="accordion" id="settingsAccordion">
            <div className="card">
              <div className="card-header" id="exceptionsHeading">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#exceptionsCollapse"
                    aria-expanded="true"
                    aria-controls="exceptionsCollapse"
                  >
                    Exceptions
                  </button>
                </h2>
              </div>

              <div
                id="exceptionsCollapse"
                className="collapse"
                aria-labelledby="exceptionsHeading"
                data-parent="#settingsAccordion"
              >
                <div className="card-body">
                  <Table striped bordered>
                    <thead>
                      <tr>
                        <td width="10%">Count</td>
                        <td width="auto">Exception</td>
                        <td width="5%">
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Button
                              outline
                              size="sm"
                              color="secondary"
                              style={{ marginRight: 5 }}
                              onClick={() => setFilterExceptions([])}
                            >
                              ☐
                            </Button>
                            <Button
                              outline
                              size="sm"
                              color="success"
                              onClick={() =>
                                setFilterExceptions(
                                  Array.from(exceptions.keys())
                                )
                              }
                            >
                              ☑
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from(exceptions.keys())
                        .sort()
                        .map((k) => (
                          <tr key={k}>
                            <td>{exceptions.get(k)}</td>
                            <td>{k}</td>
                            <td>
                              <Input
                                type="checkbox"
                                className="tableCheckbox"
                                checked={filterExceptions.includes(k)}
                                onChange={(e) => {
                                  if (e.target.checked)
                                    setFilterExceptions([
                                      ...filterExceptions,
                                      k,
                                    ]);
                                  else
                                    setFilterExceptions([
                                      ...filterExceptions.filter(
                                        (s) => s !== k
                                      ),
                                    ]);
                                }}
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="workersHeading">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#workersCollapse"
                    aria-expanded="true"
                    aria-controls="workersCollapse"
                  >
                    Workers
                  </button>
                </h2>
              </div>

              <div
                id="workersCollapse"
                className="collapse"
                aria-labelledby="workersHeading"
                data-parent="#settingsAccordion"
              >
                <div className="card-body">
                  <Table striped bordered>
                    <thead>
                      <tr>
                        <td width="10%">Count</td>
                        <td width="auto">Worker</td>
                        <td width="5%">
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Button
                              outline
                              size="sm"
                              color="secondary"
                              style={{ marginRight: 5 }}
                              onClick={() => setFilterWorkers([])}
                            >
                              ☐
                            </Button>
                            <Button
                              outline
                              size="sm"
                              color="success"
                              onClick={() =>
                                setFilterWorkers(Array.from(workers.keys()))
                              }
                            >
                              ☑
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from(workers.keys())
                        .sort()
                        .map((k) => (
                          <tr key={k}>
                            <td>{workers.get(k)}</td>
                            <td>{k}</td>
                            <td>
                              <div>
                                <Input
                                  type="checkbox"
                                  className="tableCheckbox"
                                  checked={filterWorkers.includes(k)}
                                  onChange={(e) => {
                                    if (e.target.checked)
                                      setFilterWorkers([...filterWorkers, k]);
                                    else
                                      setFilterWorkers([
                                        ...filterWorkers.filter((s) => s !== k),
                                      ]);
                                  }}
                                />
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
          Events:
          <br />
          {"Start Time: "}
          <DatePicker
            selected={
              filterStartDate ??
              (logLines.length > 0 ? logLines[0].Timestamp : new Date())
            }
            onChange={(date) => {
              if (date instanceof Date) setFilterStartDate(date);
            }}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="dd.MM.yyyy HH:mm"
          />
          <Button onClick={() => setFilterStartDate(logLines[0].Timestamp)}>
            Clear
          </Button>
          <br />
          {"End Time: "}
          <DatePicker
            selected={
              filterEndDate ??
              (logLines.length > 0
                ? logLines[logLines.length - 1].Timestamp
                : new Date())
            }
            onChange={(date) => {
              if (date instanceof Date) setFilterEndDate(date);
            }}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="dd.MM.yyyy HH:mm"
          />
          <Button
            onClick={() =>
              setFilterEndDate(logLines[logLines.length - 1].Timestamp)
            }
          >
            Clear
          </Button>
          <br />
          Filtered {viewLogLines.length} out of {logLines.length}
          <br />
          Showing {currentPage * 1000} ...{" "}
          {Math.min(viewLogLines.length - currentPage * 1000, 1000) +
            currentPage * 1000}
          <ReactPaginate
            pageCount={viewLogLines.length / 1000}
            onPageChange={(s) => {
              console.log(s.selected);
              setCurrentPage(s.selected);
            }}
            forcePage={currentPage}
            disableInitialCallback={true}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
          />
          <Table striped>
            <thead>
              <tr>
                <td width="5%">#</td>
                <td width="10%">Time</td>
                <td width="10%">Level</td>
                <td width="10%">Work Item</td>
                <td width="20%">Message</td>
                <td width="auto">Exception</td>
              </tr>
            </thead>
            <tbody>
              {viewLogLines
                .filter(
                  (_, i) =>
                    i >= currentPage * 1000 && i < (currentPage + 1) * 1000
                )
                .map((l) => (
                  <tr key={l.Id} className={"logRow " + l.Level}>
                    <td>{l.Id}</td>
                    <td>{l.Timestamp.toLocaleString()}</td>
                    <td>{l.Level}</td>
                    <td>{l.Properties?.WorkItemKey ?? "*"}</td>
                    <td>{l.Message}</td>
                    <td>{l.Exception}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export { App, LogLine };

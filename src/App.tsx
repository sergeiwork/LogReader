import React, { createRef, useCallback, useEffect, useState, version } from "react";
import { Button, Input, Progress, Spinner, Table } from "reactstrap";
import "./App.css";
import Graph from "./components/Graph";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactPaginate from "react-paginate";
import { useDropzone } from "react-dropzone";

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
  const versionNumber = "0.4";

  const fileInput = createRef<HTMLInputElement>();
  const [fileLines, setFileLines] = useState<string[]>([]);
  const [logLines, setLogLines] = useState<LogLine[]>([]);

  const [exceptions, setExceptions] = useState(new Map<string, number>());
  const [workers, setWorkers] = useState(new Map<string, number>());
  const [applicationSessionIds, setApplicationSessionIds] = useState(new Map<string, number>());
  const [applicationSessionIdTimestamps, setApplicationSessionIdTimestamps] = useState(new Map<string, Date>());

  const [loading, setLoading] = useState(false);

  const [filterExceptions, setFilterExceptions] = useState<string[]>([]);
  const [filterWorkers, setFilterWorkers] = useState<string[]>([]);
  const [filterApplicationSessionIds, setFilterApplicationSessionIds] = useState<string[]>([]);
  const [filterStartDate, setFilterStartDate] = useState<Date>(new Date(0));
  const [filterEndDate, setFilterEndDate] = useState<Date>(new Date(0));

  const [filterExceptionsStaging, setFilterExceptionsStaging] = useState<string[]>([])
  const [filterWorkersStaging, setFilterWorkersStaging] = useState<string[]>([])
  const [filterApplicationSessionIdsStaging, setFilterApplicationSessionIdsStaging] = useState<string[]>([])
  const [filterModified, setFilterModified] = useState(false)

  const [viewLogLines, setViewLogLines] = useState<LogLine[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(0);

  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [loadingTotal, setLoadingTotal] = useState<number>(0);

  const [currentFile, setCurrentFile] = useState('');

  const onDrop = useCallback((files: File[]) => {
    if (files.length === 1) {
      loadFile(files[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => setFilterModified(true), [filterExceptionsStaging, filterWorkersStaging, filterApplicationSessionIdsStaging]);

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
    const newApplicationSessionIds = new Map<string, number>();

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

      let applicationSessionId = log.Properties?.ApplicationSessionId ?? "";
      if (newApplicationSessionIds.has(applicationSessionId))
        newApplicationSessionIds.set(applicationSessionId, newApplicationSessionIds.get(applicationSessionId)! + 1);
      else newApplicationSessionIds.set(applicationSessionId, 1);
    }

    setExceptions(newExceptions);
    setFilterExceptionsStaging(Array.from(newExceptions.keys()));

    setWorkers(newWorkers);
    setFilterWorkersStaging(Array.from(newWorkers.keys()));

    setApplicationSessionIds(newApplicationSessionIds);
    setFilterApplicationSessionIdsStaging(Array.from(newApplicationSessionIds.keys()));

    var newApplicationSessionIdTimestamps = Array.from(newApplicationSessionIds.keys())
    .reduce(function (map:Map<string, Date>, sessionId:string)
      {
        map.set(sessionId, objects
          .filter(line => line.Properties?.ApplicationSessionId === sessionId)
          .reduce(function (date: Date, line: LogLine) { return line.Timestamp < date ? line.Timestamp : date; }, new Date(9999, 12, 31)));

        return map;
      }, new Map<string, Date>());
    
    setApplicationSessionIdTimestamps(newApplicationSessionIdTimestamps);

    if (objects.length > 0) {
      setFilterStartDate(objects[0].Timestamp);
      setFilterEndDate(objects[objects.length - 1].Timestamp);
    }
    applyFilters();

    setLogLines(objects);
  }, [fileLines, loading]);

  useEffect(() => {
    setViewLogLines(
      logLines.filter(
        (l) =>
          (!l.Exception || filterExceptions.includes(l.Exception.split(" ")[0])) &&
          filterWorkers.includes((l.Properties?.WorkerName ?? "General") + " " + l.Level) &&
          filterApplicationSessionIds.includes(l.Properties?.ApplicationSessionId ?? "") &&
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
    filterApplicationSessionIds,
    filterStartDate,
    filterEndDate,
  ]);

  const loadFile = (file: File) => {
    setFileLines([]);
    const chunkSize = 1024 * 1024 * 100;
    const totalChunks = file.size / chunkSize + 1;
    let currentChunk = 0;
    setCurrentFile(file.name);
    setLoadingProgress(0);
    setLoadingTotal(totalChunks);
    setLoading(true);
    const reader = new FileReader();
    reader.addEventListener("error", (event) => {
      console.error("Can not load file", event);
      setLoading(false);
      setFileLines([]);
      setCurrentPage(0);
      setCurrentFile('');
      applyFilters();
    });
    reader.addEventListener("load", (event) => {
      const lines = (event.target?.result as string).split("\n");
      setFileLines((l) => [...l, ...lines]);
      currentChunk++;
      console.log(currentChunk, totalChunks);
      if (currentChunk > totalChunks) {
        setLoading(false);
        setCurrentPage(0);
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

  const applyFilters = () => {
    setFilterExceptions([...filterExceptionsStaging]);
    setFilterWorkers([...filterWorkersStaging]);
    setFilterApplicationSessionIds([...filterApplicationSessionIdsStaging]);
    setFilterModified(false);
  }

  return (
    <div className="app">
      <div style={{position: "absolute", left: "0px", top: "0px", color: "lightgray"}}>v{versionNumber}</div>
      <div>
        <div {...getRootProps()} className="dropzone">
          <input
            type="file"
            ref={fileInput}
            disabled={loading}
            accept=".json"
            {...getInputProps()}
            />
          {isDragActive ? "Drop file here" : "Click or drag and drop files here"}
        </div>
        <div>{currentFile}</div>
      </div>
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
            <Button onClick={() => applyFilters() } disabled={!filterModified}>Apply settings</Button>
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
                              onClick={() => setFilterExceptionsStaging([])}
                            >
                              ☐
                            </Button>
                            <Button
                              outline
                              size="sm"
                              color="success"
                              onClick={() =>
                                setFilterExceptionsStaging(
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
                                checked={filterExceptionsStaging.includes(k)}
                                onChange={(e) => {
                                  if (e.target.checked)
                                    setFilterExceptionsStaging([
                                      ...filterExceptionsStaging,
                                      k,
                                    ]);
                                  else
                                    setFilterExceptionsStaging([
                                      ...filterExceptionsStaging.filter(
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
                              onClick={() => setFilterWorkersStaging([])}
                            >
                              ☐
                            </Button>
                            <Button
                              outline
                              size="sm"
                              color="success"
                              onClick={() =>
                                setFilterWorkersStaging(Array.from(workers.keys()))
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
                                  checked={filterWorkersStaging.includes(k)}
                                  onChange={(e) => {
                                    if (e.target.checked)
                                      setFilterWorkersStaging([...filterWorkersStaging, k]);
                                    else
                                      setFilterWorkersStaging([
                                        ...filterWorkersStaging.filter((s) => s !== k),
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
              <div className="card">
              <div className="card-header" id="exceptionsHeading">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#applicationSessionIdsCollapse"
                    aria-expanded="true"
                    aria-controls="applicationSessionIdsCollapse"
                  >
                    Application Session Ids
                  </button>
                </h2>
              </div>

              <div
                id="applicationSessionIdsCollapse"
                className="collapse"
                aria-labelledby="applicationSessionIdsHeading"
                data-parent="#settingsAccordion"
              >
                <div className="card-body">
                  <Table striped bordered>
                    <thead>
                      <tr>
                        <td width="10%">Count</td>
                        <td width="auto">Application Session Id</td>
                        <td width="auto">Start time</td>
                        <td width="5%">
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Button
                              outline
                              size="sm"
                              color="secondary"
                              style={{ marginRight: 5 }}
                              onClick={() => setFilterApplicationSessionIdsStaging([])}
                            >
                              ☐
                            </Button>
                            <Button
                              outline
                              size="sm"
                              color="success"
                              onClick={() =>
                                setFilterApplicationSessionIdsStaging(
                                  Array.from(applicationSessionIds.keys())
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
                      {Array.from(applicationSessionIds.keys())
                        .sort()
                        .map((k) => (
                          <tr key={k}>
                            <td>{applicationSessionIds.get(k)}</td>
                            <td>{k}</td>
                            <td>{applicationSessionIdTimestamps.get(k)?.toString()}</td>
                            <td>
                              <Input
                                type="checkbox"
                                className="tableCheckbox"
                                checked={filterApplicationSessionIdsStaging.includes(k)}
                                onChange={(e) => {
                                  if (e.target.checked)
                                    setFilterApplicationSessionIdsStaging([
                                      ...filterApplicationSessionIdsStaging,
                                      k,
                                    ]);
                                  else
                                  setFilterApplicationSessionIdsStaging([
                                      ...filterApplicationSessionIdsStaging.filter(
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
          <Table striped id="mainTable">
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
                    <td>
                      <p style={{ wordWrap: "break-word" }}>{l.Id}</p>
                    </td>
                    <td>
                      <p style={{ wordWrap: "break-word" }}>
                        {l.Timestamp.toLocaleString()}
                      </p>
                    </td>
                    <td>
                      <div>
                        <p style={{ wordWrap: "break-word" }}>{l.Level}</p>
                        <p style={{ wordWrap: "break-word" }}>{l.Properties?.MetricName}</p>
                        <p style={{ wordWrap: "break-word" }}>{l.Properties?.ConcurrentTaskIndex}</p>
                      </div>
                    </td>
                    <td>
                      <p style={{ wordWrap: "break-word" }}>
                        {l.Properties?.WorkItemKey ?? "*"}
                      </p>
                    </td>
                    <td>
                      <p style={{ wordWrap: "break-word" }}>{l.Message}</p>
                    </td>
                    <td>
                      <p style={{ wordWrap: "break-word", whiteSpace: "break-spaces" }}>{l.Exception}</p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <ReactPaginate
            pageCount={viewLogLines.length / 1000}
            onPageChange={(s) => {
              setCurrentPage(s.selected);
              document.getElementById("mainTable")?.scrollIntoView();
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
        </div>
      )}
    </div>
  );
}

export { App, LogLine };

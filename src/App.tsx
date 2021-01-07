import React, { createRef, useEffect, useState } from "react";
import { Button, Input, Spinner, Table } from "reactstrap";
import "./App.css";
import Graph from "./components/Graph";

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

  const [viewLogLines, setViewLogLines] = useState<LogLine[]>([]);

  useEffect(() => {
    var objects = fileLines
      .filter((l) => l.trim().length > 0)
      .map<LogLine>((l, i) => {
        const obj = JSON.parse(l);
        return {
          Timestamp: new Date(obj.Timestamp),
          Level: obj.Level,
          Message: format(obj.MessageTemplate, obj.Properties),
          Exception: obj.Exception,
          Id: i,
          Properties: obj.Properties,
        };
      });

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

    setLogLines(objects);
  }, [fileLines]);

  useEffect(() => {
    setLoading(true);
    setViewLogLines(
      logLines.filter(
        (l) =>
          (!l.Exception ||
            filterExceptions.includes(l.Exception.split(" ")[0])) &&
          filterWorkers.includes(
            (l.Properties?.WorkerName ?? "General") + " " + l.Level
          )
      )
    );
    setLoading(false);
  }, [logLines, filterExceptions, filterWorkers]);

  const loadFile = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const lines = (event.target?.result as string).split("\n");
      setFileLines(lines);
      setLoading(false);
    });
    setLoading(true);
    reader.readAsText(fileInput.current!.files![0]);
  };

  return (
    <div className="app">
      <input type="file" ref={fileInput} disabled={loading} accept=".json" />
      <Button onClick={loadFile} disabled={loading}>
        Load
      </Button>
      {loading ? (
        <Spinner color="info" />
      ) : (
        <div style={{ width: "100%" }}>
          <Graph LogLines={viewLogLines} Workers={filterWorkers} />
          Exceptions:
          <Table striped bordered>
            <thead>
              <tr>
                <td width="10%">Count</td>
                <td width="auto">Exception</td>
                <td width="5%">
                  <div style={{ display: "flex", flexDirection: "row" }}>
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
                        setFilterExceptions(Array.from(exceptions.keys()))
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
                            setFilterExceptions([...filterExceptions, k]);
                          else
                            setFilterExceptions([
                              ...filterExceptions.filter((s) => s !== k),
                            ]);
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <br />
          Workers:
          <Table striped bordered>
            <thead>
              <tr>
                <td width="10%">Count</td>
                <td width="auto">Worker</td>
                <td width="5%">
                  <div style={{ display: "flex", flexDirection: "row" }}>
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
          <br />
          Events:
          <br />
          Showing {viewLogLines.length} out of {logLines.length}
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
              {viewLogLines.map((l) => (
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

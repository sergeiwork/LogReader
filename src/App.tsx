import React, { createRef, useState } from "react";
import "./App.css";
import { Button, Table } from "reactstrap";

class LogLine {
  Timestamp: string = "";
  Level: string = "";
  Message: string = "";
  Exception: string = "";
}

const format = (str: string, obj: any): string => {
  Object.keys(obj).forEach((key) => {
    str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), obj[key]);
  });

  return str;
};

function App() {
  const fileInput = createRef<HTMLInputElement>();
  const [logLines, setLogLines] = useState<LogLine[]>([]);
  const loadFile = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const lines = (event.target?.result as string).split("\n");
      setLogLines(
        lines.map((l) => {
          const obj = JSON.parse(l);
          return {
            Timestamp: obj.Timestamp,
            Level: obj.Level,
            Message: format(obj.MessageTemplate, obj.Properties),
            Exception: obj.Exception,
          };
        })
      );
    });
    reader.readAsText(fileInput.current!.files![0]);
  };

  return (
    <div className="app">
      <Table>
        <thead>
          <tr>
            <td>Time</td>
            <td>Level</td>
            <td>Message</td>
            <td>Exception</td>
          </tr>
        </thead>
        <tbody>
          {logLines.map((l) => (
            <tr>
              <td>{l.Timestamp}</td>
              <td>{l.Level}</td>
              <td>{l.Message}</td>
              <td>{l.Exception}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <input type="file" ref={fileInput} accept=".json" />
      <Button onClick={loadFile}>Load</Button>
    </div>
  );
}

export default App;

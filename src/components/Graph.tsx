import React, { useState, useEffect } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
} from "recharts";
import { LogLine } from "../App";

class GraphPoint {
  public Time: string = "00";
  public Timestamp: number = 0;
  [key: string]: number | string;
}

function CreateGraphPoint(
  timeStamp: number,
  time: string,
  lines: string[]
): GraphPoint {
  let result = new GraphPoint();
  result.Timestamp = timeStamp;
  result.Time = time;
  lines.forEach((line) => {
    result[line] = 0;
  });
  return result;
}

class GraphProps {
  LogLines: LogLine[] = [];
  Workers: string[] = [];
}

function Graph(props: GraphProps) {
  const [graphData, setGraphData] = useState<GraphPoint[]>([]);

  useEffect(() => {
    const newGraph = new Array<GraphPoint>();
    let newPoint = new GraphPoint();
    for (let log of props.LogLines) {
      let worker = (log.Properties?.WorkerName ?? "General") + " " + log.Level;
      let time =
        log.Timestamp.getHours() +
        ":" +
        (Math.floor(log.Timestamp.getMinutes() / 10) * 10 + "").padStart(
          2,
          "0"
        );
      if (time !== newPoint.Time) {
        if (newPoint.Time !== "") {
          newGraph.push(newPoint);
        }
        newPoint = CreateGraphPoint(
          log.Timestamp.getTime(),
          time,
          props.Workers
        );
      }
      let current = newPoint[worker] as number;
      newPoint[worker] = (isNaN(current) ? 0 : current) + 1;
    }
    setGraphData(newGraph);
  }, [props.LogLines, props.Workers]);

  return (
    <LineChart data={graphData} height={300} width={1000}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Time" />
      <YAxis />
      <Tooltip />
      <Legend />
      {props.Workers.map((w) => (
        <Line
          type="monotone"
          dataKey={w}
          stroke={"#" + Math.floor(Math.random() * 16777215).toString(16)}
          key={w}
        />
      ))}
    </LineChart>
  );
}

export default Graph;

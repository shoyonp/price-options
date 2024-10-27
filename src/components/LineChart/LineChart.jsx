import { LineChart as LChart, Line, XAxis,  YAxis } from "recharts";

const LineChart = () => {
    const studentMarksData = [
        { id: 1, name: "Alice", math: 78, physics: 82, chemistry: 75 },
        { id: 2, name: "Bob", math: 85, physics: 79, chemistry: 88 },
        { id: 3, name: "Charlie", math: 92, physics: 91, chemistry: 89 },
        { id: 4, name: "Daisy", math: 66, physics: 72, chemistry: 70 },
        { id: 5, name: "Ethan", math: 74, physics: 68, chemistry: 76 },
        { id: 6, name: "Fiona", math: 89, physics: 84, chemistry: 82 },
        { id: 7, name: "George", math: 95, physics: 93, chemistry: 90 },
        { id: 8, name: "Hannah", math: 68, physics: 71, chemistry: 73 },
        { id: 9, name: "Isaac", math: 80, physics: 77, chemistry: 85 },
        { id: 10, name: "Julia", math: 77, physics: 83, chemistry: 79 }
      ];
      

  return (
    <div>
      <LChart width={800} height={400} data={studentMarksData}>
      <XAxis dataKey="name" />
      <YAxis></YAxis>
        <Line dataKey="math" stroke="green"></Line>
        <Line dataKey={'physics'} stroke="purple"></Line>
        <Line dataKey={'chemistry'}></Line>
      </LChart>
    </div>
  );
};

export default LineChart;

"use client";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import Navbar from "../../components/Navbar";

const COLORS = { Text: "#7f37f5", Call: "#37a162", Video: "#274d40" };

export default function Stats() {
  const { timeline } = useContext(TimelineContext);

  const data = [
    { name: "Text",  value: timeline.filter(t => t.type === "Text").length },
    { name: "Call",  value: timeline.filter(t => t.type === "Call").length },
    { name: "Video", value: timeline.filter(t => t.type === "Video").length },
  ];

  const total = data.reduce((s, d) => s + d.value, 0);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-20">
        <h1 className="font-bold text-5xl text-gray-900 py-5 mx-1 sm:mx-3 md:mx-20 lg:mx-60">
          Friendship Analytics
        </h1>
        <div className="bg-white p-5 rounded-xl shadow-2xl mx-1 sm:mx-3 md:mx-20 lg:mx-60 flex flex-col justify-center items-center">
          <h2 className="w-full text-left text-xl text-green-900 font-extrabold">By Interaction Type</h2>
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={95}
              outerRadius={130}
              paddingAngle={5}
              cornerRadius={9}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={COLORS[entry.name]} />
              ))}
            </Pie>
            <Tooltip formatter={(value, name) => [`${value} (${Math.round(value / total * 100)}%)`, name]} />
          </PieChart>
          <div className="flex gap-5">
            {data.map((entry) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[entry.name] }} />
                <p className="text-gray-500 text-sm">
                  {entry.name} {total > 0 ? Math.round(entry.value / total * 100) : 0}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
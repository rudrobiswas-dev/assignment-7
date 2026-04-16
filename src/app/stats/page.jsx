"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import Navbar from "../../components/Navbar";

const COLORS = {
  Text: "#7f37f5",
  Call: "#37a162",
  Video: "#274d40",
};

export default function Stats() {
  const { timeline } = useContext(TimelineContext);

  const data = [
    { name: "Text", value: timeline.filter((t) => t.type === "Text").length },
    { name: "Call", value: timeline.filter((t) => t.type === "Call").length },
    { name: "Video", value: timeline.filter((t) => t.type === "Video").length },
  ];

  const total = data.reduce((s, d) => s + d.value, 0);

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 xl:px-60 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 py-5">
            Friendship Analytics
          </h1>
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl flex flex-col items-center justify-center">

            <h2 className="w-full text-left text-lg sm:text-xl text-green-900 font-extrabold mb-4">
              By Interaction Type
            </h2>
            <div className="w-full flex justify-center">
              <PieChart width={260} height={260} className="sm:w-[300px] sm:h-[300px]">
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={5}
                  cornerRadius={9}
                >
                  {data.map((entry) => (
                    <Cell key={entry.name} fill={COLORS[entry.name]} />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value, name) => [
                    `${value} (${total ? Math.round((value / total) * 100) : 0}%)`,
                    name,
                  ]}
                />
              </PieChart>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
              {data.map((entry) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[entry.name] }}
                  />
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {entry.name}{" "}
                    {total > 0 ? Math.round((entry.value / total) * 100) : 0}%
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
"use client";

import { useContext, useState } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import Navbar from "../../components/Navbar";

const icons = {
  Call: (
    <div className="bg-purple-100 p-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-purple-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
    </div>
  ),
  Text: (
    <div className="bg-orange-100 p-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-orange-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    </div>
  ),
  Video: (
    <div className="bg-green-100 p-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-green-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
      </svg>
    </div>
  ),
};

export default function Timeline() {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((t) => t.type === filter);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 xl:px-60 py-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Timeline
          </h1>
          <div className="flex justify-start mb-6">
            <div className="relative w-full sm:w-72">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-3 pr-10 rounded-xl bg-white shadow-xl text-green-900 appearance-none focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="All">Filter timeline</option>
                <option value="Call">Call</option>
                <option value="Text">Text</option>
                <option value="Video">Video</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* LIST */}
          <div>
            {filteredTimeline.length === 0 ? (
              <p className="text-lg sm:text-2xl md:text-3xl text-green-900">
                No interactions yet
              </p>
            ) : (
              filteredTimeline.map((t) => (
                <div
                  key={t.id}
                  className="flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 mb-3 sm:mb-4 rounded-xl border bg-white"
                >
                  {icons[t.type] || icons.Text}

                  <div>
                    <p className="text-base sm:text-lg font-semibold text-gray-800">
                      {t.type} with{" "}
                      <span className="text-gray-500">{t.name}</span>
                    </p>

                    <p className="text-xs sm:text-sm text-gray-400">
                      {t.date}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
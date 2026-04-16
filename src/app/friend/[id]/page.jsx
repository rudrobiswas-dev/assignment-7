"use client";

import { useParams } from "next/navigation";
import friends from "../../../data/friends.json";
import { useContext } from "react";
import { TimelineContext } from "../../../context/TimelineContext";
import toast from "react-hot-toast";
import Navbar from "../../../components/Navbar";
import Image from "next/image";

export default function Details() {
  const { id } = useParams();
  const friend = friends.find((f) => f.id == id);
  const { addEntry } = useContext(TimelineContext);

  if (!friend) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Friend not found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-6">

        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/3">

            <div className="bg-white p-6 rounded-xl text-center shadow mb-4">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={96}
                height={96}
                className="rounded-full mx-auto"
              />
              <h2 className="font-bold text-2xl text-gray-950 mt-3">
                {friend.name}
              </h2>
              <h3
                className={`inline-flex items-center mt-2 rounded-full px-3 py-1 text-xs font-medium ${
                  friend.status === "overdue"
                    ? "bg-red-100 text-red-600"
                    : friend.status === "almost due"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {friend.status}
              </h3>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-3">{friend.bio}</p>
              <p className="text-gray-700 text-sm mt-1">{friend.email}</p>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-white text-gray-950 py-2 rounded-xl shadow hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer">
              ⏰ Snooze 2 Weeks
              </button>
              <button className="w-full bg-white text-gray-950 py-2 rounded-xl shadow hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer">
               📦 Archive
              </button>
              <button className="w-full bg-white text-gray-950 py-2 rounded-xl shadow hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer">
               🗑️ Delete
              </button>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h1 className="text-2xl font-bold text-green-950">
                  {friend.days_since_contact}
                </h1>
                <p className="text-gray-500 text-sm">Days Since Contact</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h1 className="text-2xl font-bold text-green-950">
                  {friend.goal}
                </h1>
                <p className="text-gray-500 text-sm">Goal (Days)</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h1 className="text-2xl font-bold text-green-950">
                  {friend.next_due_date}
                </h1>
                <p className="text-gray-500 text-sm">Next Due</p>
              </div>

            </div>
            <div className="bg-white p-5 rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">

              <div>
                <h1 className="text-green-950 text-xl font-bold">
                  Relationship Goal
                </h1>
                <p className="text-gray-500 text-sm">
                  Connect every {friend.goal} days
                </p>
              </div>

              <button className="bg-gray-300 text-gray-950 px-3 py-1 rounded-xl text-sm hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer">
                Edit
              </button>

            </div>
            <div className="bg-white p-5 rounded-xl shadow">
              <h1 className="text-green-950 text-2xl mb-3">
                Quick Check-In
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                {["Call", "Text", "Video"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      addEntry(type, friend.name);
                      toast.success(`${type} added`);
                    }}
                    className="w-full bg-gray-200 text-gray-900 py-4 rounded-xl shadow hover:bg-gray-300 transition"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
"use client";
import Navbar from "../components/Navbar";
import friends from "../data/friends.json";
import Link from "next/link";
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import Image from "next/image";

export default function Home() {
  const { timeline } = useContext(TimelineContext);

  const totalFriends = friends.length;

  const onTrack = friends.filter((f) => f.status === "on-track").length;

  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almost due"
  ).length;

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-6">

        {/* Banner */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Friends to keep close in your life
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
          <button className="mt-4 bg-green-950 text-white px-5 py-2 rounded-lg hover:scale-105 transition">
            + Add Friend
          </button>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-10 text-center">
          {[
            { value: totalFriends, label: "Total Friend" },
            { value: onTrack, label: "On Track" },
            { value: needAttention, label: "Need Attention" },
            { value: 12, label: "Interactions This Month" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <h1 className="text-2xl md:text-3xl font-bold text-green-950">
                {item.value}
              </h1>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
        {/* Friends Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Your Friends
        </h1>
        {/* Friends Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {friends.map((f) => (
            <Link key={f.id} href={`/friend/${f.id}`}>
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center space-y-3">
                
                <Image
  src={f.picture}
  alt={f.name}
  width={80}
  height={80}
  className="rounded-full shadow"
/>

                <h2 className="text-gray-900 font-semibold">{f.name}</h2>
                <p className="text-sm text-gray-500">
                  {f.days_since_contact} days
                </p>
                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {f.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Status */}
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    f.status === "overdue"
                      ? "bg-red-100 text-red-600"
                      : f.status === "almost due"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {f.status}
                </span>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </>
  );
}
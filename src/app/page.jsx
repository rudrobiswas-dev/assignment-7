"use client";
import Navbar from "../components/Navbar";
import friends from "../data/friends.json";
import Link from "next/link";
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";

export default function Home() {

  const { timeline } = useContext(TimelineContext);

  // Total friends
  const totalFriends = friends.length;

  // On Track
  const onTrack = friends.filter(f => f.status === "on-track").length;

  // Need Attention
  const needAttention = friends.filter(
    f => f.status === "overdue" || f.status === "almost due"
  ).length;


  return (
    <>
      <Navbar />

      <div className="p-6 bg-gray-50 min-h-screen">

        {/* Banner */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Friends to keep close in your life
          </h1>
          <p className="text-sm text-gray-500 font-medium">
              Your personal shelf of meaningful connections.
              Browse, tend, and nurture the relationships that matter most.
          </p>
          <button className="mt-4 bg-green-950 text-white px-4 py-2 rounded">
            + Add Friend
          </button>
        </div>
        {/* add friend number */}
        <div className="grid grid-cols-1 px-3 md:grid-cols-2 md:px-20 lg:grid-cols-4 lg:px-60 gap-6 py-16 text-center">
          <div className="bg-white px-20 py-10 rounded-xl shadow-xl/30">
            <h1 className="text-green-950 text-3xl font-bold">{totalFriends}</h1>
            <p className="text-gray-500 text-sm">Total Friend</p>
          </div>
          <div className="bg-white px-20 py-10 rounded-xl shadow-xl/30">
            <h1 className="text-green-950 text-3xl font-bold">{onTrack}</h1>
            <p className="text-gray-500 text-sm">On Track</p>
          </div>
          <div className="bg-white px-20 py-10 rounded-xl shadow-xl/30">
            <h1 className="text-green-950 text-3xl font-bold">{needAttention}</h1>
            <p className="text-gray-500 text-sm">Need Attention</p>
          </div>
          <div className="bg-white px-20 py-10 rounded-xl shadow-xl/30">
            <h1 className="text-green-950 text-3xl font-bold">12</h1>
            <p className="text-gray-500 text-sm">Interactions This Month</p>
          </div>
        </div>

        {/* Cards */}

        <h1 className="text-2xl font-bold text-gray-900 px-1 sm:px-3 md:px-20 lg:px-60 pb-4">Your Friends</h1>
        <div className="grid grid-cols-1 px-3 md:grid-cols-2 md:px-20 lg:grid-cols-4 lg:px-60 gap-6 ">
          {friends.map((f) => (
            <Link key={f.id} href={`/friend/${f.id}`}>
              <div className="flex flex-col bg-white p-4 rounded-xl shadow-xl/30 space-y-2">
                <img src={f.picture} className="w-20 h-20  rounded-full shadow-xl mx-auto" />
                <h2 className="text-center text-gray-950">{f.name}</h2>
                <p className="text-center text-sm text-gray-950">{f.days_since_contact} days</p>
                <div className="flex flex-col justify-center items-center space-y-2">

                    <div className="flex flex-wrap justify-center gap-2">
                      {f.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-green-400 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className={`text-center inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-gray-700 ${
                                f.status === "overdue"
                                      ? "bg-red-400"
                                      : f.status === "almost due"
                                      ? "bg-yellow-400"
                                      : "bg-green-400"
                                  }`}>
                      {f.status}
                    </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </>
  );
}
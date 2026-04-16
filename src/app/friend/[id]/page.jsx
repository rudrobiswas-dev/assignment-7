"use client";

import { useParams } from "next/navigation";
import friends from "../../../data/friends.json";
import { useContext } from "react";
import { TimelineContext } from "../../../context/TimelineContext";
import toast from "react-hot-toast";
import Navbar from "../../../components/Navbar";

export default function Details() {
  const { id } = useParams();
  const friend = friends.find(f => f.id == id);
  const { addEntry } = useContext(TimelineContext);

  return (
    <>
      <Navbar />

      <div className="gap-6 bg-gray-50  p-1 sm:p-2 md:px-60 md:py-10 flex">
        {/* 1st */}
        <div className="w-1/4">
            <div className="bg-white p-6 rounded-xl text-center shadow mb-4">
              <img src={friend.picture} className="w-24 rounded-full mx-auto" />
              <h2 className="text-center font-bold text-3xl text-gray-950">{friend.name}</h2>

              <h3 className="inline-flex items-center rounded-full bg-red-400 px-2.5 py-0.5 text-xs font-medium text-gray-700">{friend.status}</h3>
              
              <div className="flex flex-wrap justify-center gap-2">
                          {friend.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center rounded-full bg-green-400 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
              </div>
              <h2 className="text-xl text-gray-700">{friend.bio}</h2>
              <h6 className="text-xl text-gray-800">{friend.email}</h6>
            </div>

            <button className="block w-full bg-white my-1  text-xl text-gray-950 py-2 rounded-xl shadow">Snooze 2 weeks</button>
            <button className="block w-full bg-white text-xl text-gray-950 py-2 rounded-xl shadow my-3">Archive</button>
            <button className="block w-full my-1 bg-white text-xl text-gray-950 py-2 rounded-xl shadow">Delete</button>
        </div>

          {/* 2nd */}
          <div className="w-3/4">
                <div className="flex justify-between space-x-5">
                  <div className="bg-white w-full px-20 py-10 rounded-xl shadow ">
                    <h1 className="text-green-950 text-3xl font-bold">0</h1>
                    <p className="text-gray-500 text-xl">Days Since Contact</p>
                  </div>
                  <div className="bg-white w-full px-20 py-10 rounded-xl shadow">
                    <h1 className="text-green-950 text-3xl font-bold">0</h1>
                    <p className="text-gray-500 text-xl">Goal (Days)</p>
                  </div>
                  <div className="bg-white w-full px-20 py-10 rounded-xl shadow">
                    <h1 className="text-green-950 text-3xl font-bold">0</h1>
                    <p className="text-gray-500 text-xl">Next Due</p>
                  </div>
                </div>

                <div className="bg-white px-10 py-5 rounded-xl shadow flex justify-between my-5">
                  <div><h1 className="text-green-950 text-2xl font-bold pb-2">Relationship Goal</h1>
                      <div className="flex space-x-1"><p className="text-gray-500 text-xl">Connect every</p> <p className="text-gray-900 text-xl">30 days</p></div>
                  </div>
                  <button className="block h-fit  bg-gray-600 text-lg text-gray-950 py-1 px-3 rounded">Edit</button>
                </div>


              <div className="bg-white rounded-xl px-10 py-5">
                <h1 className="text-green-950 text-3xl">Quick Check-In</h1>
                <div className=" flex justify-between space-x-5 rounded-2xl">
                  {["Call","Text","Video"].map(type => (
                    <button key={type}
                      onClick={()=>{
                        addEntry(type, friend.name);
                        toast.success(`${type} added`);
                      }}
                      className="block w-full bg-gray-200 text-gray-900 text-xl   p-5 my-2 rounded-xl shadow">
                      {type}
                    </button>
                  ))}
                </div>
              </div>



          </div>

      </div>
    </>
  );
}
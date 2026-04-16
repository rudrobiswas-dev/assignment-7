"use client";

import Link from "next/link";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-950 border-t md:px-20 lg:px-60 lg:pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col justify-between items-center gap-4">

        {/* Brand */}
        <div className="flex pb-2">
            <h2 className="font-bold text-gray-50 text-7xl">
          Keen
        </h2>
        <h2 className=" text-gray-100 text-7xl">Keeper</h2>
        </div>
        <p className="text-xl text-gray-500">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        {/* Social Links */}
        <h2 className="font-bold text-gray-50 text-3xl">Social Links</h2>
        <div className="flex gap-4  text-gray-600 text-3xl pb-6">
          <a href="#" target="_blank" className="bg-white p-2 rounded-full"><FaGithub /></a>
          <a href="#" target="_blank" className="bg-white p-2 rounded-full"><FaFacebook /></a>
          <a href="#" target="_blank" className="bg-white p-2 rounded-full"><FaLinkedin /></a>
        </div>

      </div>

      {/* Bottom */}
      <div className="flex justify-between ">
        <div className="text-center text-sm text-gray-500 pb-4">
        © {new Date().getFullYear()} KeenKeeper. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-gray-600">
          <p className="text-sm text-gray-500">Privacy Policy</p>
          <p className="text-sm text-gray-500">Terms of Service </p>
          <p className="text-sm text-gray-500">Cookies</p>
        </div>
      </div>
    </footer>
  );
}
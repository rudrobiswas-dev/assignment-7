"use client";

import Link from "next/link";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-950 border-t px-6 md:px-20 lg:px-60 pt-12 lg:pt-20 pb-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="flex flex-wrap justify-center">
          <h2 className="font-bold text-gray-50 text-4xl sm:text-5xl md:text-6xl">
            Keen
          </h2>
          <h2 className="text-gray-100 text-4xl sm:text-5xl md:text-6xl">
            Keeper
          </h2>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <h2 className="font-bold text-gray-50 text-xl md:text-2xl">
          Social Links
        </h2>
        <div className="flex gap-4 text-xl text-gray-950 md:text-2xl">
          <a href="#" className="bg-white p-2 rounded-full hover:scale-110 transition">
            <FaGithub />
          </a>
          <a href="#" className="bg-white p-2 rounded-full hover:scale-110 transition">
            <FaFacebook />
          </a>
          <a href="#" className="bg-white p-2 rounded-full hover:scale-110 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="border-t-2 border-green-900 my-6"></div>

      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} KeenKeeper. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
          <p className="hover:text-white cursor-pointer">Terms of Service</p>
          <p className="hover:text-white cursor-pointer">Cookies</p>
        </div>
      </div>
    </footer>
  );
}
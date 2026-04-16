"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaClock, FaChartPie, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl transition ${
      path === href
        ? "bg-green-900 text-white"
        : "text-gray-600 hover:bg-green-100"
    }`;

  return (
    <nav className="shadow bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-4">
      
      <div className="flex justify-between items-center">
        <div className="flex">
          <h1 className="font-bold text-gray-950 text-xl sm:text-2xl">Keen</h1>
          <span className="font-bold text-xl sm:text-2xl text-green-900">Keeper</span>
        </div>
        <div className="hidden md:flex gap-4">
          <Link href="/" className={linkClass("/")}>
            <FaHome /> Home
          </Link>
          <Link href="/timeline" className={linkClass("/timeline")}>
            <FaClock /> Timeline
          </Link>
          <Link href="/stats" className={linkClass("/stats")}>
            <FaChartPie /> Stats
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
        >
          <FaBars />
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-2 mt-4 md:hidden">
          <Link href="/" className={linkClass("/")}>
            <FaHome /> Home
          </Link>
          <Link href="/timeline" className={linkClass("/timeline")}>
            <FaClock /> Timeline
          </Link>
          <Link href="/stats" className={linkClass("/stats")}>
            <FaChartPie /> Stats
          </Link>
        </div>
      )}
    </nav>
  );
}
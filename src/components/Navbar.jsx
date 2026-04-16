"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaClock, FaChartPie } from "react-icons/fa";

export default function Navbar() {
  const path = usePathname();

  const linkClass = (href) =>
    `flex items-center gap-2 px-4 py-2 rounded ${
      path === href ? "bg-green-600 text-white" : "text-gray-600"
    }`;

  return (
    <nav className="flex justify-between shadow bg-white px-20 py-4">
      <div className="flex"><h1 className="font-bold text-gray-950 text-2xl">Keen </h1><span className="font-bold text-2xl text-green-950">Keeper</span></div>

      <div className="flex gap-4">
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
    </nav>
  );
}
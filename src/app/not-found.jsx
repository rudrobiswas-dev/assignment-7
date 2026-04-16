import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6">

      <div className="max-w-md w-full text-center">

        {/* Big number */}
        <h1 className="text-7xl sm:text-8xl md:text-[120px] leading-none font-extrabold text-green-900 tracking-tight">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-800">
          This page does not exist
        </h2>

        <p className="mt-2 text-sm sm:text-base text-green-950">
          Maybe the link is broken or the page has been moved. Let’s get you back on track.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">

          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 bg-green-900 text-white text-sm font-medium rounded-lg hover:bg-green-800 transition"
          >
            Go Home
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 text-green-900 text-sm font-medium rounded-lg border border-green-300 hover:bg-green-200 transition"
          >
            Go Back
          </Link>

        </div>

        {/* Footer text */}
        <p className="mt-10 text-base sm:text-lg md:text-xl text-gray-400">
          <span className="text-red-400">Error code:</span> lost in space 🛸
        </p>

      </div>
    </div>
  );
}
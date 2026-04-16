export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-12 h-12 border-4 border-green-950 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-green-900 text-sm animate-pulse">
        Loading...
      </p>
    </div>
  );
}
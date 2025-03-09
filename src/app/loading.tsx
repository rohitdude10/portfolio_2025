export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light dark:bg-dark">
      <div className="text-center">
        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-xl">Loading...</p>
      </div>
    </div>
  );
} 
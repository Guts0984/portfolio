import Link from "next/link";

export default function Resume() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl text-center">
        <h1 className="mb-6 text-4xl font-bold text-zinc-800 dark:text-zinc-100">
          My Resume
        </h1>

        <Link
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-nebula-purple px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-purple-700"
        >
          <svg
            className="mr-2 h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          View My CV
        </Link>
      </div>
    </div>
  );
}

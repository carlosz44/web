export default function Card({ item }) {
  return (
    <div className="w-full bg-gray-600 bg-opacity-10 rounded p-3 text-white border border-purple-400 shadow-lg">
      <div className="w-full mb-3 pb-3 border-b border-1 border-purple-400">
        <h3 className="text-xl font-semibold">{item.title}</h3>
      </div>

      <div className="mb-1">
        <p className="px-0 mb-4 tracking-wide">{item.description}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline inline-flex items-center justify-center bg-gray-50 bg-opacity-0 border border-purple-400 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10"
        >
          Details
          <svg
            className="-mr-1 ml-3 h-5 w-5 text-gray-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

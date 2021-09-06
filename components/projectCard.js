export default function Card({ item }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r border-2 border-green-400 from-purple-400 to-green-400 shadow-lg transform translate-x-1 translate-y-1 rounded-md"></div>
      <div className="relative border-2 border-purple-400 bg-gray-800 shadow-lg rounded-md">
        <div className="flex flex-col p-4 sm:px-6">
          <div className="w-full mb-3 pb-3 border-b border-1 border-purple-400">
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
          <div className="mb-1">
            <p className="px-0 mb-4 tracking-wide text-justify">
              {item.description}
            </p>
            <div className="flex flex-row-reverse justify-between items-center">
              <div className="text-base leading-6 font-medium flex justify-end relative mb-1">
                <div className="absolute inset-0 bg-gradient-to-r border-2 border-green-400 from-purple-400 to-green-400 shadow-lg transform translate-x-1.5 translate-y-1.5 rounded-md"></div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative border-2 border-purple-400 bg-gray-800 hover:bg-purple-400 shadow-lg hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transform focus:ring focus:ring-white focus:ring-inset rounded-md transition duration-300 px-4 py-2 text-white outline-none"
                  href={item.link}
                >
                  Details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SearchTram = ({ defaultValue }) => {
  return (
    <form method="GET" className="flex items-center gap-2 w-full sm:w-auto">
      <input
        type="text"
        name="search"
        defaultValue={defaultValue}
        placeholder="Search books..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-indigo-500"
      />

      <button
        type="submit"
        className="px-4 cursor-pointer py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchTram;

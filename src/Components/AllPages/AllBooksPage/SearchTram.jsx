const SearchTram = ({ defaultValue }) => {
  return (
    <form method="GET" className="flex items-center gap-3 w-full sm:w-auto flex-1">
      <input
        type="text"
        name="search"
        defaultValue={defaultValue}
        placeholder="Search books..."
        className="w-full px-5 py-2.5 border border-slate-200 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow-md transition-all duration-300 text-slate-800 placeholder-slate-400"
      />

      <button
        type="submit"
        className="px-6 cursor-pointer py-2.5 btn-premium rounded-xl"
      >
        Search
      </button>
    </form>
  );
};

export default SearchTram;

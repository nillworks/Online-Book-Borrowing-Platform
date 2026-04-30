const SearchTram = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-1/2 mx-auto mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search books..."
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-indigo-500"
      />
    </div>
  );
};

export default SearchTram;

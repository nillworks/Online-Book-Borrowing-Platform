const FilterBooks = ({
  selectedCategories,
  onCategoryChange,
  availability,
  setAvailability,
}) => {
  return (
    <div>
      {/* Categories */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Categories</h2>

        <div className="space-y-3">
          {['Story', 'Tech', 'Science'].map(cat => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => onCategoryChange(cat)}
                className="accent-indigo-600 w-4 h-4"
              />
              <span className="text-gray-700">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Availability</h2>

        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="availability"
              checked={availability === 'all'}
              onChange={() => setAvailability('all')}
            />
            <span>All Books</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="availability"
              checked={availability === 'available'}
              onChange={() => setAvailability('available')}
            />
            <span>Available Now</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBooks;

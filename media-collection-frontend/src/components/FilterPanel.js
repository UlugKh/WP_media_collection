const FilterPanel = ({ filters, onChange }) => {
  const currentTypes = Array.isArray(filters.type) ? filters.type : [];

  return (
    <div className="filters">
      <label>
        <input
          type="checkbox"
          checked={currentTypes.includes('book')}
          onChange={(e) => {
            const newTypes = e.target.checked
              ? [...currentTypes, 'book']
              : currentTypes.filter((t) => t !== 'book');
            onChange({ ...filters, type: newTypes });
          }}
        />
        Books
      </label>
      <label>
        <input
          type="checkbox"
          checked={currentTypes.includes('movie')}
          onChange={(e) => {
            const newTypes = e.target.checked
              ? [...currentTypes, 'movie']
              : currentTypes.filter((t) => t !== 'movie');
            onChange({ ...filters, type: newTypes });
          }}
        />
        Movies
      </label>
    </div>
  );
};

export default FilterPanel;
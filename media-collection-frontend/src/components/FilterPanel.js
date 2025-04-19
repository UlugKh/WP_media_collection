const FilterPanel = ({ filters, onChange }) => {
  const mediaTypes = ['book', 'movie', 'anime', 'manga', 'show'];
  const currentTypes = Array.isArray(filters.type) ? filters.type : [];

  const handleTypeToggle = (type) => (e) => {
    const newTypes = e.target.checked
      ? [...currentTypes, type]
      : currentTypes.filter((t) => t !== type);

    onChange({ ...filters, type: newTypes });
  };

  return (
    <div className="filters">
      <h4>Filter by Type</h4>
      {mediaTypes.map((type) => (
        <label key={type} style={{ display: 'block' }}>
          <input
            type="checkbox"
            checked={currentTypes.includes(type)}
            onChange={handleTypeToggle(type)}
          />
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </label>
      ))}

      <h4>Filter by Status</h4>
      <select
        value={filters.status}
        onChange={(e) => onChange({ ...filters, status: e.target.value })}
      >
        <option value="">All</option>
        <option value="read">Read</option>
        <option value="not read">Not Read</option>
        <option value="watched">Watched</option>
        <option value="not watched">Not Watched</option>
      </select>
    </div>
  );
};

export default FilterPanel;
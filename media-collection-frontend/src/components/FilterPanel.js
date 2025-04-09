const FilterPanel = ({ filters, onChange }) => {
  return (
    <div className="filters">
      <label>
        <input
          type="checkbox"
          checked={filters.type === "book"}
          onChange={() => onChange({ ...filters, type: "book" })}
        />
        Books
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.type === "movie"}
          onChange={() => onChange({ ...filters, type: "movie" })}
        />
        Movies
      </label>
    </div>
  );
};

export default FilterPanel;

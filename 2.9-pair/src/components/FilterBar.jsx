/**
 * FilterBar — three filter buttons (All / Active / Completed).
 * Highlights the currently active filter and calls onChange(filter)
 * when a different one is clicked.
 */
const FILTERS = ['All', 'Active', 'Completed'];

function FilterBar({ current, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter tasks">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          id={`filter-${filter.toLowerCase()}`}
          className={current === filter ? 'active' : ''}
          onClick={() => onChange(filter)}
          aria-pressed={current === filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;

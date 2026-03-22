const filters = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
]

function FilterBar({ filter, onChangeFilter }) {
  return (
    <section className="panel">
      <h2>Filter</h2>
      <div className="filter-row">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            className={`filter-chip ${filter === item.value ? 'active' : ''}`}
            onClick={() => onChangeFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  )
}

export default FilterBar

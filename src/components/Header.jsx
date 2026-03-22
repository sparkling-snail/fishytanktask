import { FishIcon, Waves } from 'lucide-react'

function Header({ taskCount, progress }) {
  return (
    <section className="panel hero-panel">
      <div>
        <div className="eyebrow">
          <Waves size={16} /> Cozy productivity
        </div>
        <h1>Fish Tank Task Tracker</h1>
        <p>
          Every task becomes a fish. Add tasks, watch them swim, and click them when completed.
        </p>
      </div>

      <div className="hero-stats">
        <div className="stat-pill">
          <span className="stat-label">Fish</span>
          <strong>{taskCount}</strong>
        </div>
        <div className="stat-pill">
          <span className="stat-label">Tank health</span>
          <strong>{progress}%</strong>
        </div>
        <div className="hero-icon-wrap">
          <FishIcon size={28} />
        </div>
      </div>
    </section>
  )
}

export default Header

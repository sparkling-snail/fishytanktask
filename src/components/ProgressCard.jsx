import { Trash } from 'lucide-react'

function ProgressCard({ total, completed, progress, onClearCompleted }) {
  return (
    <section className="panel">
      <h2>Progress</h2>
      <div className="progress-row">
        <div>
          <div className="progress-number">{completed}/{total}</div>
          <div className="subtle-text">tasks completed</div>
        </div>
        <strong>{progress}%</strong>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <button className="secondary-button" type="button" onClick={onClearCompleted}>
        <Trash size={16} /> Clear completed
      </button>
    </section>
  )
}

export default ProgressCard

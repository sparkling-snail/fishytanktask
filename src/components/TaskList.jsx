import { CheckCircle2, Circle, Trash2 } from 'lucide-react'

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <section className="panel">
      <div className="section-header">
        <h2>Task list</h2>
      </div>

      <div className="list-stack">
        {tasks.length === 0 ? (
          <div className="empty-list">No tasks in this filter.</div>
        ) : (
          tasks.map((task) => (
            <article key={task.id} className="task-card">
              <div className="task-copy">
                <div className={`task-title ${task.done ? 'is-done' : ''}`}>{task.title}</div>
                <div className="task-meta">
                  <span>{task.priority}</span>
                  <span>{task.category}</span>
                </div>
              </div>

              <div className="task-actions">
                <button className="icon-button" type="button" onClick={() => onToggleTask(task.id)}>
                  {task.done ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                </button>
                <button className="icon-button" type="button" onClick={() => onDeleteTask(task.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  )
}

export default TaskList

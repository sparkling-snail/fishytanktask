import { useState } from 'react'
import { Plus } from 'lucide-react'

const defaultForm = {
  title: '',
  priority: 'Medium',
  category: 'General',
}

function TaskForm({ onAddTask }) {
  const [form, setForm] = useState(defaultForm)

  const updateField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const title = form.title.trim()
    if (!title) return

    onAddTask({
      title,
      priority: form.priority,
      category: form.category.trim() || 'General',
    })

    setForm(defaultForm)
  }

  return (
    <section className="panel">
      <h2>Add a fish</h2>
      <form className="stack" onSubmit={handleSubmit}>
        <label className="field">
          <span>Task name</span>
          <input
            type="text"
            value={form.title}
            onChange={(event) => updateField('title', event.target.value)}
            placeholder="Finish project proposal"
          />
        </label>

        <label className="field">
          <span>Priority</span>
          <select
            value={form.priority}
            onChange={(event) => updateField('priority', event.target.value)}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </label>

        <label className="field">
          <span>Category</span>
          <input
            type="text"
            value={form.category}
            onChange={(event) => updateField('category', event.target.value)}
            placeholder="Work, Study, Personal"
          />
        </label>

        <button className="primary-button" type="submit">
          <Plus size={18} /> Add fish task
        </button>
      </form>
    </section>
  )
}

export default TaskForm

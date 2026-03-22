import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import FishTank from './components/FishTank'
import ProgressCard from './components/ProgressCard'
import TaskList from './components/TaskList'
import FilterBar from './components/FilterBar'

const STORAGE_KEY = 'fish-task-tracker-tasks'

const starterTasks = [
  {
    id: 1,
    title: 'Reply to emails',
    done: false,
    priority: 'Medium',
    category: 'Work',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Finish sprint ticket',
    done: true,
    priority: 'High',
    category: 'Work',
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Gym session',
    done: false,
    priority: 'Low',
    category: 'Health',
    createdAt: new Date().toISOString(),
  },
]

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setTasks(JSON.parse(saved))
        return
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
    setTasks(starterTasks)
  }, [])

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    }
  }, [tasks])

  const addTask = ({ title, priority, category }) => {
    const task = {
      id: Date.now(),
      title,
      priority,
      category,
      done: false,
      createdAt: new Date().toISOString(),
    }
    setTasks((current) => [...current, task])
  }

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  const deleteTask = (id) => {
    setTasks((current) => {
      const next = current.filter((task) => task.id !== id)
      if (next.length === 0) {
        localStorage.removeItem(STORAGE_KEY)
      }
      return next
    })
  }

  const clearCompleted = () => {
    setTasks((current) => {
      const next = current.filter((task) => !task.done)
      if (next.length === 0) {
        localStorage.removeItem(STORAGE_KEY)
      }
      return next
    })
  }

  const filteredTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter((task) => !task.done)
    if (filter === 'completed') return tasks.filter((task) => task.done)
    return tasks
  }, [tasks, filter])

  const completedCount = tasks.filter((task) => task.done).length
  const progress = tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0

  return (
    <div className="page-shell">
      <div className="app-grid">
        <div className="main-column">
          <Header taskCount={tasks.length} progress={progress} />
          <FishTank tasks={filteredTasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
        </div>

        <aside className="sidebar">
          <TaskForm onAddTask={addTask} />
          <ProgressCard
            total={tasks.length}
            completed={completedCount}
            progress={progress}
            onClearCompleted={clearCompleted}
          />
          <FilterBar filter={filter} onChangeFilter={setFilter} />
          <TaskList tasks={filteredTasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
        </aside>
      </div>
    </div>
  )
}

export default App

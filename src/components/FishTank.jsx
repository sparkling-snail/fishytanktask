import { motion } from 'framer-motion'
import { FishIcon } from 'lucide-react'
import FishTask from './FishTask'

function FishTank({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <section className="panel tank-panel">
      <div className="tank-header-row">
        <div>
          <h2>My aquarium</h2>
          <p>Click a fish to complete its task.</p>
        </div>
        <div className="tank-badge">{tasks.length} visible fish</div>
      </div>

      <div className="tank">
        <div className="tank-glow" />

        {Array.from({ length: 14 }).map((_, index) => (
          <motion.div
            key={`bubble-${index}`}
            className="bubble"
            style={{ left: `${8 + index * 6}%`, animationDelay: `${index * 0.6}s` }}
            animate={{ y: [0, -420], opacity: [0, 0.9, 0] }}
            transition={{ duration: 6 + (index % 4), repeat: Infinity, ease: 'easeOut' }}
          />
        ))}

        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={`plant-${index}`}
            className="plant"
            style={{ left: `${4 + index * 9}%`, height: `${50 + (index % 4) * 18}px` }}
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {tasks.length === 0 ? (
          <div className="empty-tank">
            <FishIcon size={48} />
            <h3>No fish in this view</h3>
            <p>Add a task or switch the filter to see more fish.</p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <FishTask
              key={task.id}
              task={task}
              index={index}
              onToggle={() => onToggleTask(task.id)}
              onDelete={() => onDeleteTask(task.id)}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default FishTank

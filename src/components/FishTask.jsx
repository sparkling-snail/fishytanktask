import { motion } from 'framer-motion'
import { Check, Trash2 } from 'lucide-react'

const paletteByIndex = [
  'orange',
  'blue',
  'pink',
  'purple',
  'green',
  'yellow',
]

const scaleByPriority = {
  High: 1.16,
  Medium: 1,
  Low: 0.88,
}

function FishTask({ task, index, onToggle, onDelete }) {
  const left = 8 + (index % 4) * 22
  const top = 18 + Math.floor(index / 4) * 24
  const palette = paletteByIndex[index % paletteByIndex.length]

  return (
    <motion.div
      className="fish-wrap"
      style={{ left: `${left}%`, top: `${top}%`, scale: scaleByPriority[task.priority] }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
    >
      <motion.button
        className={`fish fish-${palette} ${task.done ? 'fish-done' : ''}`}
        whileHover={{ scale: 1.06 }}
        animate={{ x: [0, 12, 0], y: [0, -4, 0] }}
        transition={{ duration: 5 + (index % 3), repeat: Infinity, ease: 'easeInOut' }}
        onClick={onToggle}
        title={task.title}
      >
        <span className="fish-eye" />
        <span className="fish-tail" />
        {task.done && (
          <span className="fish-check">
            <Check size={12} />
          </span>
        )}
      </motion.button>

      <div className="fish-tooltip">
        <strong>{task.title}</strong>
        <span>
          {task.priority} · {task.category}
        </span>
      </div>

      <button className="delete-fish" type="button" onClick={onDelete} aria-label={`Delete ${task.title}`}>
        <Trash2 size={14} />
      </button>
    </motion.div>
  )
}

export default FishTask

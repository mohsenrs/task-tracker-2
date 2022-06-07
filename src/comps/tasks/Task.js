import { FaTimes, FaCheck } from 'react-icons/fa'

const Task = ({ task, onDelete, onReminderToggle }) => {
  return (
    <div className={`task ${task.reminder === true ? 'reminder' : ''}`}>
      <h3>
        {task.text}{' '}
        <div>
          <FaCheck
            title='set reminder'
            style={{ cursor: 'pointer', marginRight: '7px' }}
            onClick={() => onReminderToggle(task.id)}
          />
          <FaTimes
            title='delete'
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => onDelete(task.id)}
          />
        </div>
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task

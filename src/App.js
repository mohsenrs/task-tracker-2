import { useState } from 'react'
import Header from './comps/Header'
import AddTask from './comps/tasks/AddTask'
import Tasks from './comps/tasks/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'first', reminder: false },
    { id: 2, text: 'second', reminder: true },
    { id: 3, text: 'third', reminder: false },
    { id: 4, text: '4th', reminder: true },
  ])

  const [showAddForm, setShowAddForm] = useState(false)

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const reminderToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  const handleShowAddForm = () => {
    setShowAddForm(!showAddForm)
  }

  const handleOnSubmit = (newTask) => {
    setTasks([...tasks, newTask])
    console.log('submitted')
    setShowAddForm(false)
  }

  return (
    <div className='container'>
      <Header
        title='task tracker'
        showAddForm={handleShowAddForm}
        showState={showAddForm}
      />

      {showAddForm && <AddTask onSubmitForm={handleOnSubmit} />}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onReminderToggle={reminderToggle}
        />
      ) : (
        <h4 style={{ color: 'crimson' }}>No Tasks Added Yet!</h4>
      )}
    </div>
  )
}

export default App

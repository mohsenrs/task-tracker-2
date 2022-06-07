import { useState, useEffect } from 'react'
import Header from './comps/Header'
import AddTask from './comps/tasks/AddTask'
import Tasks from './comps/tasks/Tasks'

function App() {
  const [tasks, setTasks] = useState([])

  const [showAddForm, setShowAddForm] = useState(false)

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks/')
    const data = await res.json()

    setTasks(data)
  }

  const getTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const reminderToggle = async (id) => {
    const selectedTask = await getTask(id)
    const updTask = { ...selectedTask, reminder: !selectedTask.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  const handleShowAddForm = () => {
    setShowAddForm(!showAddForm)
  }

  const handleOnSubmit = async (newTask) => {
    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })

    const data = await res.json()
    setTasks([...tasks, data])

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

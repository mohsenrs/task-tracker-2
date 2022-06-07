import { useState } from 'react'

const AddTask = ({ onSubmitForm }) => {
  const [input, setInput] = useState({
    id: +Math.floor(Math.random() * 10000 + 1),
    text: '',
    reminder: false,
  })

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      id: input.id,
      text: input.text,
      reminder: input.reminder,
    }
    console.log(newTask)
    onSubmitForm(newTask)
  }

  return (
    <form className='add-form' onSubmit={handleOnSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          required
          value={input.text}
          onChange={(e) => setInput({ ...input, text: e.target.value })}
        />
      </div>
      <div className='form-control'>
        <label htmlFor=''>Set Reminder</label>
        <input
          className='form-control-check'
          type='checkbox'
          value={input.reminder}
          onChange={() => setInput({ ...input, reminder: !input.reminder })}
        />
      </div>

      <input type='submit' value='submit' className='btn btn-block' />
    </form>
  )
}

export default AddTask

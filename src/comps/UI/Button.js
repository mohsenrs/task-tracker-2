const Button = ({ color, text, onShowAddForm }) => {
  return (
    <button
      className='btn'
      style={{ backgroundColor: color }}
      onClick={onShowAddForm}
    >
      {text}
    </button>
  )
}

export default Button

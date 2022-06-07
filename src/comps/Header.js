import Button from './UI/Button'

const Header = ({ title, showAddForm, showState }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={showState ? 'red' : 'green'}
        text={showState ? 'Close' : 'Add'}
        onShowAddForm={showAddForm}
      />
    </header>
  )
}

export default Header

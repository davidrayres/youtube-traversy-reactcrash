import Button from './Button'

const Header = ({onAdd, showForm}) => {
  return (
    <header>
      <h1>Task Tracker</h1>
      <Button bgColor={showForm ? 'red' : 'green'} text={showForm ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}

export default Header

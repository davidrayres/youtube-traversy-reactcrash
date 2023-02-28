import {useState, useEffect} from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import Footer from './components/Footer'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5001/tasks')
      const data = await response.json()
      setTasks(data)
      console.log(data)
    }
    fetchData()
  }, [])

  const toggleShowForm = () => {
    setShowForm(!showForm)
  }

  const toggleReminder = id => {
    setTasks(tasks.map(task => (task.id === id ? {...task, reminder: !task.reminder} : task)))
  }

  const deleteTask = id => setTasks(tasks.filter(task => id !== task.id))

  return (
    <main>
      <Header onAdd={toggleShowForm} showForm={showForm} />
      {showForm && <AddTask />}
      {tasks.length ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : 'No Tasks Found'}
      <Footer />
    </main>
  )
}

export default App

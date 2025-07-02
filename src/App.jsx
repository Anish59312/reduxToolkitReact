import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
Todos

function App() {

  return (
    <>
      <h1 className='black'>React Redux Tool Kit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App

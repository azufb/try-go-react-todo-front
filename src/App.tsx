import './App.css'
import { TodoForm } from './components/todoForm'
import { TodoList } from './components/todoList'

function App() {

  return (
    <>
      <h1>Go! React! Todo App!</h1>
      <TodoForm />
      <TodoList />
    </>
  )
}

export default App

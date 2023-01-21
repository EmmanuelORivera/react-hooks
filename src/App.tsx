import { useState, useReducer } from 'react'
import { ReducerAction, TodosActions, TodosState } from './interfaces/Todo.interface'

import './App.css'
import Todos from './Todos'


const reducer = (todos: TodosState[], action: ReducerAction) => {
  switch (action.type) {
    case TodosActions.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case TodosActions.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case TodosActions.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }

}

const newTodo = (name: string) => {
  return { id: Date.now(), name, complete: false }
}

function App() {
  const [name, setName] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: TodosActions.ADD_TODO, payload: { name } })
    setName('')
  }

  console.log(todos)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={name} />
      </form>
      <>
        {
          todos.map(todo => <Todos key={todo.id} todo={todo} dispatch={dispatch} />
          )
        }
      </>
    </div>
  )
}

export default App

import React from 'react'
import { ReducerAction, TodosActions, TodosState } from './interfaces/Todo.interface'

type Props = {
    todo: TodosState,
    dispatch: React.Dispatch<ReducerAction>
}

const Todos: React.FC<Props> = ({ dispatch, todo }) => {
    console.log(todo)
    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>{todo.name}</span>
            <button onClick={() => dispatch({ type: TodosActions.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button>
            <button onClick={() => dispatch({ type: TodosActions.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
        </div>
    )
}

export default Todos


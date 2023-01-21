export enum TodosActions {
    ADD_TODO = 'add_todo',
    TOGGLE_TODO = 'toggle_todo',
    DELETE_TODO = 'delete_todo'
}

export interface TodosState {
    id: number,
    name: string,
    complete: boolean
}

export interface AddTodoAction {
    type: TodosActions.ADD_TODO
    payload: { name: string }
}

export interface TooggleOrDeleteTodoAction {
    type: TodosActions.TOGGLE_TODO
    | TodosActions.DELETE_TODO
    payload: { id: number }
}

export type ReducerAction = AddTodoAction | TooggleOrDeleteTodoAction
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './action-types';

export const addTodo=(todo)=>({
    type:ADD_TODO,
    payload:todo
})

export const updateTodo=(todo)=>({
    type:UPDATE_TODO,
    payload:todo
})

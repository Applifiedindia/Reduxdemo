import {ADD_TODO,TOGGLE_TODO} from './actionType'

let nextId=0

export const addTodo=(text)=>({
      type:ADD_TODO,
      id:nextId++,
      text,
} )

export const toggleTodo=(id)=>({
type:TOGGLE_TODO,
id
})
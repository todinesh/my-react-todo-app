import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, LOAD_TODO_LIST, SAVE_TODO_LIST } from './actionsTypes'
    
    let TodoId = 1
 
    export const addTodo = text => ({
        type: ADD_TODO,
        id: TodoId++,
        text
    })
    
    export const deleteTodo = (id) => ({
        type: REMOVE_TODO,
        id: id
    })
    
    export const toggleTodo = (id) => ({
        type: TOGGLE_TODO,
        id: id
    })
    
    export const setVisibilityFilter = filter => ({
        type: SET_VISIBILITY_FILTER,
        filter
      })
    
    //load and save data in db
    export const loadTodo = () => ({
        type: LOAD_TODO_LIST
    })
    export const saveTodo = () => ({
        type: SAVE_TODO_LIST
    })
    
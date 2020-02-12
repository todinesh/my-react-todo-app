import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, RENDER_TODO_LIST} from '../actions/actionsTypes'
const initialState = []
const ToDoReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,{
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ]
        case REMOVE_TODO:
            const numIndex = parseInt(action.id)
            return state.filter(todo => todo.id !== numIndex);
        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                  ? {...todo, completed: !todo.completed}
                  : todo
                 )
        case RENDER_TODO_LIST:
            return [
                ...state,
                ...action.data
            ]
        default:
            return state
    }
}

export default ToDoReducer
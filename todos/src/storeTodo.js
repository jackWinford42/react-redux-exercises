const INITIAL_STATE = { todos: [] };
function addTodo(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "INSERT":
            return { ...state, todos: [...state.todos, action.todo] };
        case "UPDATE":
            return { ...state, todos: state.todos.map(toDo =>
                toDo.id === action.todo.id ? { ...toDo, task: action.todo.task } : toDo
            )}
        case "DELETE":
            return { ...state, todos: state.todos.filter(toDo => toDo.id !== action.todo.id) };
        default:
            return state;
    }
}

export default addTodo;
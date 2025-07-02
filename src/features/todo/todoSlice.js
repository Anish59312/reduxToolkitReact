import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => { 
            //current state has current values, and action has values to work on
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        //TODO: make upate todo
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer //only exported reducer(s) will be used
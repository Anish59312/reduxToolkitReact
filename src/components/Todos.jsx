import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
    return (
        <div className="max-w-2xl mx-auto mt-8 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Todos</h2>
            {todos.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-500 text-lg">No todos yet. Add one above!</p>
                </div>
            ) : (
                <ul className="space-y-3">
                    {todos.map((todo) => (
                        <li key={todo.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                            <span className="text-gray-800 font-medium flex-1 mr-4">
                                {todo.text}
                            </span>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
                                aria-label="Delete todo"
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Todos
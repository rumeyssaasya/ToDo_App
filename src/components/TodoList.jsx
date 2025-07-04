import React from 'react'
import Todo from './ToDo'

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
    return (
        <div style={{ width: '100%', marginTop: '50px' }}>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} enes={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
                ))
            }

        </div>
    )
}

export default TodoList
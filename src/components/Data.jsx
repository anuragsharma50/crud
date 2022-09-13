import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodos } from '../features/todo/deleteSlice'
import { fetchTodos } from '../features/todo/todoSlice'

function Data() {

    const todo = useSelector((state) => state.todo)
    const addtodo = useSelector((state) => state.addtodo)
    const deletetodo = useSelector((state) => state.detetetodo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [addtodo,deletetodo])

    // const handleDelete = () => {
    //     return axios.delete("http://localhost:8080/todos/1")
    // }
    

  return (
    <div>
        { todo.loading && <div>Loading...</div> }
        { !todo.loading && todo.error ? <div>Error: {todo.error}</div> : null }
        { !todo.loading && todo.todos.length ? (
            <div>
                {
                    todo.todos.map(todo => (
                        <div className='item'>
                            <span key={todo.id}>{todo.title}</span>
                            <button className='delete-button' onClick={() => dispatch(deleteTodos(todo.id))}>delete</button>
                        </div>
                    ))
                }
            </div>
            ) : null
        }
    </div>
  )
}

export default Data
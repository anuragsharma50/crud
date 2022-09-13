import axios from 'axios'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../features/todo/addSlice'

function AddTodo() {

    const dispatch = useDispatch()

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        console.log(text)
        dispatch(addTodos({
            "id": Math.floor(Math.random()*10000),
            "title": `${text}`
        }))
        setText('')
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleClick}>Add Todo</button>
        </div>
    )
}

export default AddTodo
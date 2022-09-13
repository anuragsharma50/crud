import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    todos: [],
    loading: false,
    error: ''
}

export const fetchTodos = createAsyncThunk('todo/fetchTodos',() => {
    return axios.get("http://localhost:8080/todos")
    .then((response) => response.data)
})

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending,(state) => {
            state.loading = true
        })
        builder.addCase(fetchTodos.fulfilled,(state,action) => {
            state.loading = false
            state.todos = action.payload
            state.error = ''
        })
        builder.addCase(fetchTodos.rejected,(state,action) => {
            state.loading = false
            state.todos = []
            state.error = action.error.message
        })
    }
})

export default todoSlice.reducer
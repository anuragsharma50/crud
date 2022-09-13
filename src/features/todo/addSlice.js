import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    todo: '',
    loading: false,
    error: ''
}

export const addTodos = createAsyncThunk('user/addTodos',(newtodo) => {
    return axios.post("http://localhost:8080/todos",newtodo)
    .then((response) => response.data)
})

const addSlice = createSlice({
    name: 'addtodo',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addTodos.pending,(state) => {
            state.loading = true
        })
        builder.addCase(addTodos.fulfilled,(state,action) => {
            state.loading = false
            state.todo = action.payload
            state.error = ''
        })
        builder.addCase(addTodos.rejected,(state,action) => {
            state.loading = false
            state.todo = ''
            state.error = action.error.message
        })
    }
})

export default addSlice.reducer
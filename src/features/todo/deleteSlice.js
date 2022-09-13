import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    todo: '',
    loading: false,
    error: ''
}

export const deleteTodos = createAsyncThunk('user/deleteTodos',(todoId) => {
    return axios.delete(`http://localhost:8080/todos/${todoId}`)
})

const deleteSlice = createSlice({
    name: 'deletetodo',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(deleteTodos.pending,(state) => {
            state.loading = true
        })
        builder.addCase(deleteTodos.fulfilled,(state,action) => {
            state.loading = false
            state.todo = action.payload
            state.error = ''
        })
        builder.addCase(deleteTodos.rejected,(state,action) => {
            state.loading = false
            state.todo = ''
            state.error = action.error.message
        })
    }
})

export default deleteSlice.reducer
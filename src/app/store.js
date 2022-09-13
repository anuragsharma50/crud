import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
import addReducer from "../features/todo/addSlice"
import deleteReducer from "../features/todo/deleteSlice"

const store = configureStore({
  reducer: {
    todo: todoReducer,
    addtodo: addReducer,
    detetetodo: deleteReducer
  }
})

export default store
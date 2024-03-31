import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import todoReducer from './features/todo/todoSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      todos: todoReducer
    }
  })
}
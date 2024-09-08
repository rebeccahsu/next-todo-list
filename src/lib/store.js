import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import todoReducer from './features/todo/todoSlice'
import { saveStateToLocalStorage, loadStateFromLocalStorage } from '../utils/localStorage'

const preloadedState = loadStateFromLocalStorage();

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      todos: todoReducer
    },
    preloadedState
  })
}
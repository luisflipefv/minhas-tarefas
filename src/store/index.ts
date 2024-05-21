import tarefasReducer from './reducers/tarefas'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store

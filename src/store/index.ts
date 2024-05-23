import tarefasReducer from './reducers/tarefas'
import { configureStore } from '@reduxjs/toolkit'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store

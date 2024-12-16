import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IStatus, ITodoItem } from "./types"

interface ITodoState {
  items: ITodoItem[]
  status: IStatus
}

const initialState: ITodoState = {
  items: [
    { id: 1, text: "Купить продукты", completed: false },
    { id: 2, text: "Пройти собеседование", completed: false },
    { id: 3, text: "Сделать домашнее задание", completed: false },
  ],
  status: "all",
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      console.log(action.payload)
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      })
    },
    toggleItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.completed = !item.completed
      }
    },
    removeCompleted: state => {
      state.items = state.items.filter(item => item.completed === false)
    },
    filterItems: (
      state,
      action: PayloadAction<"all" | "active" | "completed">,
    ) => {
      state.status = action.payload
    },
  },
})

export const { addItem, toggleItem, removeCompleted, filterItems } =
  todoSlice.actions

export default todoSlice.reducer

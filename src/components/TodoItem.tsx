
import { ITodoItem } from "../app/todoSlice/types"
import { useAppDispatch } from "../app/hooks"
import { toggleItem } from "../app/todoSlice/todoSlice"

const TodoItem = ({ id, text, completed }: ITodoItem) => {
  const dispatch = useAppDispatch()
  const handleToggle = () => {
    dispatch(toggleItem(id))
  }

  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <input
        id={`todo-${id}`}
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label
        htmlFor={`todo-${id}`}
        className={`flex-1 ${completed ? "line-through text-gray-500" : "text-gray-900"}`}
      >
        {text}
      </label>
    </div>
  )
}

export default TodoItem

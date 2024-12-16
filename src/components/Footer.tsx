import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectAllItems } from "../app/todoSlice/selectors"
import { filterItems, removeCompleted } from "../app/todoSlice/todoSlice"
import { IStatus } from "../app/todoSlice/types"


const Footer = () => {
  const { items, status } = useAppSelector(selectAllItems)

  const leftItemsLength = items.filter(item => !item.completed).length

  const dispatch = useAppDispatch()

  const handleFilter = (status: IStatus) => {
    dispatch(filterItems(status))
  }
  const removeItems = () => {
    dispatch(removeCompleted())
  }

  return (
    <footer className="flex justify-between items-center w-[500px] p-[10px] border border-gray-200 rounded-md bg-white text-gray-500">
      <span className=" ">{leftItemsLength} items left</span>
      <div className="flex gap-[20px]">
        <button
          className={`border ${status === "all" && "border-pink-300"} rounded-md px-2 py-1`}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`border ${status === "active" && "border-pink-300"} rounded-md px-2 py-1`}
          onClick={() => handleFilter("active")}
        >
          Active
        </button>
        <button
          className={`border ${status === "completed" && "border-pink-300"} rounded-md px-2 py-1`}
          onClick={() => handleFilter("completed")}
        >
          Completed
        </button>
      </div>

      <div>
        <button onClick={removeItems} className="hover:text-pink-300">
          Clear Completed
        </button>
      </div>
    </footer>
  )
}

export default Footer

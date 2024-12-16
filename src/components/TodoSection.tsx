import TodoInput from './TodoInput'
import TodoItem from './TodoItem';
import { useAppSelector } from '../app/hooks';
import { selectAllItems } from '../app/todoSlice/selectors';

const TodoSection = () => {
  

  const {items, status} = useAppSelector(selectAllItems);


  return (
    <main>
      <TodoInput />
      <div className="bg-white shadow-md rounded-lg">
        { status === "all" && items.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}

        { status === "active" && items.filter(item => !item.completed).map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}

        { status === "completed" && items.filter(item => item.completed).map(todo => (
          <TodoItem key={todo.id} {...todo} />
          
        ))}
      </div>
    </main>
  )
}

export default TodoSection

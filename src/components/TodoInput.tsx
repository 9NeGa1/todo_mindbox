import { useDebounce } from 'use-debounce';
import {addItem} from '../app/todoSlice/todoSlice';
import { useAppDispatch } from '../app/hooks';
import { useState } from 'react';


const TodoInput = () => {
  const dispatch = useAppDispatch();

  const [text, setText] = useState('');
  const [debouncedText] = useDebounce(text, 500);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      
      dispatch(addItem(debouncedText));
      setText('');
    }
  };

  return (
    <input type="text" placeholder='What needs to be done?' className='border w-[500px] rounded-sm pl-8 h-[40px] outline-none focus:border-red-300' value={text} onChange={e => setText(e.target.value)} onKeyUp ={handleKeyPress} />
  )
}

export default TodoInput



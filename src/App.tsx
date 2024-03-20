import { useReducer } from 'react'
import './styles/App.css'

const ACTION = {
  INCREMENT: 'INCREMENT',
  INCREMENT_FIVE: 'INCREMENT_FIVE',
  DECREMENT: 'DECREMENT',
  DECREMENT_FIVE: 'DECREMENT_FIVE',
  RESET: 'RESET'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION.INCREMENT_FIVE:
      return { ...state, count: state.count + 5 };
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION.DECREMENT_FIVE:
      return { ...state, count: state.count - 5 };
    case ACTION.RESET:
      return { ...state, count: 0 };
    default:
      console.log("Default case run");
      return state;
  }
};


function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div className='flex gap-2 justify-center items-center'>
      <button className='px-4 py-2 text-white bg-black mx-2 hover:bg-slate-900 rounded-md' onClick={() => dispatch({ type: ACTION.DECREMENT_FIVE })}>-5</button>
      <button className='px-4 py-2 text-white bg-black mx-2 hover:bg-slate-900 rounded-md' onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
      <span className='text-4xl font-bold'>{state.count}</span>
      <button className='px-4 py-2 text-white bg-black mx-2 hover:bg-slate-900 rounded-md' onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
      <button className='px-4 py-2 text-white bg-black mx-2 hover:bg-slate-900 rounded-md' onClick={() => dispatch({ type: ACTION.INCREMENT_FIVE })}>+5</button>
      <button className='px-4 py-2 text-white bg-black mx-2 hover:bg-slate-900 rounded-md' onClick={() => dispatch({ type: ACTION.RESET })}>Reset</button>
    </div>

  )
}

export default App

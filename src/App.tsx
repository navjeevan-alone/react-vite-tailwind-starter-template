import { useState } from 'react'
import './styles/App.css'

function App() {
  const [counter, setCounter] = useState(0)
  function handleIncrement() {
    setCounter(counter + 1)
  }
  function handleDecrement() {
    setCounter(counter - 1)
  }
  function handleReset() {
    setCounter(0)
  }
  return (
    <div className='flex gap-2 justify-center align-middle'>
      <button className='px-4 py-2 text-white bg-black mx-2 hover:bg-slate-900 rounded-md' onClick={handleDecrement}>-</button>
      <span className='text-4xl font-bold '>{counter}</span>
      <button className='px-4 py-2 text-white bg-black mx-2 hover:bg-slate-900 rounded-md' onClick={handleIncrement}>+</button>
  
      <button className='px-4 py-2 text-white bg-black m-2 hover:bg-slate-900 rounded-md' onClick={handleReset}>reset</button>

    </div>
  )
}

export default App

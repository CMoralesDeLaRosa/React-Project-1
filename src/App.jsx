import { useState } from 'react'
import './App.css'
import ShowCount from './components/ShowCount/ShowCount'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className='app'>
      <ShowCount count={counter} />
      <div>
        <button onClick={() => setCounter(counter - 1)} className='rest'>
          Resta
        </button>
        <button onClick={() => setCounter(counter + 1)} className='sum'>
          Suma
        </button>
      </div>
    </div>
  )
}

export default App

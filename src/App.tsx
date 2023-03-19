import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Bill

      Select Tip %
      5%
      10%
      15%
      25%
      50%
      Custom

      Number of People

      Tip Amount
      / person

      Total
      / person

      Reset
    </div>
  )
}

export default App

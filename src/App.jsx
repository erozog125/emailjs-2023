import { useState } from 'react'
import './App.css'
import { ContactUS } from './ContactUs/ContactUS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ContactUS />
    </div>
  )
}

export default App

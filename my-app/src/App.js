import React, { useState } from "react"
import "./App.css"
import UserInput from "./components/UserInput"
import UserOutput from "./components/UserOutput"

function App() {
  const [name, setName] = useState()

  const handleChange = (e) => setName(e.target.value)

  return (
    <div className="App">
      <UserInput value={name} onChange={handleChange}/>
      <UserOutput value={name} />
    </div>
  )
}

export default App
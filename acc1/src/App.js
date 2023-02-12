import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("This is a message");
  const [isDisabled, setIsdisabled] = useState(false);

  const handleClick = () => {
    setCount(2);
    setIsdisabled(true)
  }
  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  return (
    <div>
      Counter : {count} <br />
      Message : {message} <br />
      <input type="text" value={message} disabled={isDisabled} onChange={handleChange} />
      <button onClick={handleClick} >Click Me</button>
    </div>
  )
}

export default App
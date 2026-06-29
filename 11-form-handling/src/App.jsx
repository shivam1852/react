import React from 'react'

const App = () => {

  function submitHandler (e) {
    e.preventDefault()
    console.log("form Submitted")
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" name="name" placeholder='Enter Your Name' />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
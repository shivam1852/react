import { useState } from 'react'

const Counter = () => {

  const [ num, setNum ] = useState(0)

  function increment () {
    setNum(num + 1)
  }

  function decrement () {
    if (num > 0)
      setNum(num - 1)
  }

  function incrementby5 () {
    
    setNum(num + 5)
  }

  function decrementby5 () {
    if (num > 0)
      setNum(num - 5)
  }



  return (
    <>
      <div>
        <h1>{num}</h1>
        <button onClick={decrementby5}> -5</button>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={incrementby5}> +5</button>
      </div>

    </>
  )
}

export default Counter
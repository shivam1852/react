import { useState } from 'react'

const UseStateHook = () => {
    const [ num, setNum ] = useState(10)
    const [ username, setUsername ] = useState('Shivam Saini')


    function changeNum () {
        setNum(30)
        setUsername('Sachin')

    }

    return (
        <div>
            <h1>Value of num is {num} <br /> user is {username} </h1>
            <button onClick={changeNum}>Click</button>
        </div>
    )
}

export default UseStateHook
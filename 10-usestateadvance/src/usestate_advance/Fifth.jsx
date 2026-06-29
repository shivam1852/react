import React, { useState } from 'react'

const Fifth = () => {
    const [ num, setNum ] = useState(10)

    function btnClicked () {
        setNum(prev=>(prev+1))//Batch update
        setNum(prev=>(prev+1))
        setNum(prev=>(prev+1))
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={btnClicked}>Change</button>
        </div>
    )
}


export default Fifth
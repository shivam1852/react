import React, { useState } from 'react'

const Second = () => {
    const [ num, setNum ] = useState([ 10, 20, 30 ])
    
    function btnClicked () {
        const newNum = [ ...num ]
        newNum.push(99)

        setNum(newNum)
    }
    return (
        <div>
            <h1>Array: {num.join(" ")}</h1>
            <button onClick={btnClicked}>Change</button>
        </div>
    )
}

export default Second
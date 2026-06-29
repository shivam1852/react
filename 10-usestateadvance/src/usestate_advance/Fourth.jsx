import React, { useState } from 'react'

const Fourth = () => {
    const [ num, setNum ] = useState({
        name: "Shivam",
        age:20
    })

    function btnClicked () {
        setNum(prev=>({...prev,age:24}))
    }

    return (
        <div>
            <h1>{num.name}, {num.age}</h1>
            <button onClick={btnClicked}>Change</button>
        </div>
    )
}

export default Fourth
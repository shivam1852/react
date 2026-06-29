import React, { useState } from 'react'

const First = () => {
    const [ num, setNum ] = useState({
        name: "Shivam Saini",
        age: 23

    })
    function btnClicked () {
        setNum({
            name: "Sachin",
            age:24
        })
    }
    return (
        <div>
            <h1>{num.name}, {num.age}</h1>
            <button onClick={btnClicked}>Change</button>
        </div>
    )
}

export default First
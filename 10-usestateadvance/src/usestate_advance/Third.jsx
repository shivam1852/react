import React, { useState } from 'react'

const Third = () => {
    const [ num, setNum ] = useState({
        name: "Shivam Saini",
        age: 23

    })

    function btnClicked () {
        const newNum = { ...num }

        newNum.name = 'Sachin'
        newNum.age = 24

        setNum(newNum)
    }

    return (
        <div>
            <h1>{num.name}, {num.age}</h1>
            <button onClick={btnClicked}>Change</button>
        </div>
    )
}

export default Third
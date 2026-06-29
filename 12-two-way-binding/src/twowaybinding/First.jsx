import React, { useState } from 'react'

const First = () => {
    const [ title, setTitle ] = useState('')


    function submitHandler (e) {
        e.preventDefault()
        console.log("Form Submitted By", title)

        setTitle('')
    }

    return (
        <div>
            <form onSubmit={(e) => submitHandler(e)}>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} type="text" name="name" placeholder='Enter Your Name' />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default First
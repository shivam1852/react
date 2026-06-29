import { useState } from 'react'


const Second = () => {
    const [ name, setName ] = useState('')

    function getInputData (e) {

        setName(e.target.value)

    }

    function postData (e) {
        e.preventDefault()
        console.log("Form Submitted by", name)

        setName('')
    }

    return (
        <div>
            <form onSubmit={(e) => postData(e)}>
                <input onChange={(e) => getInputData(e)}
                    value={name} type="text" name="name" placeholder='Enter Your Name' />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Second
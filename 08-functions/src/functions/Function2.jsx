import React from 'react'

const Function2 = () => {

    // function inputData () {
    //     console.log("User is Typing")
    // }

    return (
        <div>
            <input onChange={(e) => {
                // console.log(e)
                // console.log(e.target)
                console.log(e.target.value)
            }}
                type="text" placeholder='Enter Name' name="" id="" />
        </div>



        // <div>
        //     <input onChange={inputData} type="text" placeholder='Enter Name' />
        // </div>


        // <div>
        //     <input onChange={() => {
        //         console.log("Hello")
        //     }}
        //         type="text" placeholder='Enter Name' name="" id="" />
        // </div>
    )
}

export default Function2
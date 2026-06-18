

const Function1 = () => {

    // function btnClicked () {
    // console.log("Button is Clicked")
    // }

    // function mouseEnter () {
    //   console.log("Mouse Enterd!")
    // }

    return (
        <div>
            <h1>Hello, Shivam</h1>

            {/* <button onMouseEnter={mouseEnter} onClick={btnClicked}>Change User</button> */}
            <button onClick={() => console.log("Button Clicked")} >Change User</button>

        </div>
    )
}

export default Function1
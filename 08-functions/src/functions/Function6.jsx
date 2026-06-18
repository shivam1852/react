import React from 'react'

const Function6 = () => {
    function btnCliked () {
     console.log("Hello")
 }

  return (
      <div>
          <div>
              <button onClick={btnCliked}>Click Here...</button>
          </div>
    </div>
  )
}

export default Function6
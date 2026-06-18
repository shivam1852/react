import React from 'react'

const Function5 = () => {
    function pageScrolling (e) {
        if (e > 0) {
            console.log("Seedha Scrolling")
        }
        else {
            console.log("Ulta Scrolling")
        }
    }
  return (
      <div onWheel={(e) => {
          pageScrolling(e.deltaY)
      }}>
          <div className="page1"></div>
          <div className="page2"></div>
          <div className="page3"></div>
  </div>
  )
}

export default Function5
import React from 'react'

const Function4 = () => {
    function pageScrolling (e) {
        console.log("speed", e)
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

export default Function4
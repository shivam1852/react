import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <>
      <div className="parent">
        <Card user='Shivam Saini' age={19} img="https://images.unsplash.com/photo-1780519123579-2088d9560826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />

        <Card user='Sachin Saini' age={24} img='https://plus.unsplash.com/premium_photo-1778493011221-c7f3941f4816?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />

        <Card user='Abhishek Saini' age={22} img='https://images.unsplash.com/photo-1778875774934-8d301a9b3ac0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />

      
        
        
      </div>
    </>
  )
}

export default App
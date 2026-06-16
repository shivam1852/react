import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
      <div className={style.header}>
          <h2>Shivam Saini</h2>
          <button className={style.btn} >Login</button>
    </div>
  )
}

export default Header
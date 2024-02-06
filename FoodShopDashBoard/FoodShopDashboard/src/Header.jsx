import React from 'react'
import {BsJustifyLeft ,BsSearch,BsEnvelope,BsFillBellFill,BsPersonCircle  } from 'react-icons/bs'

function Header() {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustifyLeft  className='icon'/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>

        <div className='header-right'>
            <BsEnvelope   className='icon'/>
            <BsFillBellFill  className='icon'/>
            <BsPersonCircle   className='icon'/>
        </div>
    </header>
  )
}

export default Header
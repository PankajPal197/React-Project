import React from 'react'
import { BsCart3,BsBoxFill,BsBorderWidth,BsBuilding,BsListCheck,BsFillFileEarmarkRichtextFill,BsPeopleFill,BsDuffleFill   } from 'react-icons/bs'


function Sidebar() {
    return (
        <aside id='sidebar'>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon-header' />Shop
                </div>
                <span className='icon-close-icon'>X</span>
            </div>
            <ul className='sidebar-list'>
                    <li className='sidebar-list-item'> <a href='#' className='active'><BsBoxFill className='icon'/>  Dashboard</a></li>
                    <li className='sidebar-list-item'> <a href='#'> <BsBorderWidth  className='icon' />  Menus</a></li>
                    <li className='sidebar-list-item'> <a href='#'> <BsBuilding className='icon' />  Order</a></li>
                    <li className='sidebar-list-item'> <a href='#'> <BsListCheck className='icon' /> Restaurent List</a></li>
                    <li className='sidebar-list-item'> <a href='#'> <BsFillFileEarmarkRichtextFill className='icon' /> Invoice</a></li>
                    <li className='sidebar-list-item'> <a href='#'><BsPeopleFill className='icon' />  Customers</a></li>
                    <li className='sidebar-list-item'> <a href='#'> <BsDuffleFill className='icon' /> Sales</a></li>
            </ul>
            

        </aside>
    )
}

export default Sidebar
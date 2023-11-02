import { useState } from 'react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../components/navy.css"
import Logo from "../assets/images/logy.png"
import {FaBars} from "react-icons/fa"
import {MdOutlineClose} from "react-icons/md"
   

 const links = [
  {
      name1: "Home",
      path: '/'
  },
  {
      name1: "About",
      path: '/about'
  },
  {
      name1: "Gallery",
      path: '/gallery'
  },
  {
      name1: "Plans",
      path: '/plans'
  },
  {
      name1: "Community",
      path: '/community'
  },
  {
      name1: "Contact",
      path: '/contact'
  }
]



const Navbar = () => {
  const[isNavShowing, setIsNavShowing] = useState(false);

    return (
    <nav>
    <div className="container nav_container">
     <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
      <div className='imagu'>
      <img src = {Logo} alt = "Nav Logo" />
      </div>
     </Link>
      <ul className={`nav__links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
        {
          links.map(({name1, path}, index) => {
               return (
                <li key={index}>
                  <NavLink to = {path} className={({isActive})=> isActive ? 'active-nav' :' '}
                  onClick={() => setIsNavShowing(prev => !prev)}>{name1}</NavLink>
                </li>
               )
          })
        }
        </ul> 
        <button className='nav_toggle-btn' onClick={() => setIsNavShowing(prev  => !prev )}>
          {
            isNavShowing ? <MdOutlineClose />: <FaBars />
          }
         
        </button>
    </div>
    </nav>
  )

}
export default Navbar;
import React from 'react'
//import { Link } from 'react-router-dom';

const Navbar = ({top}) => {
  return (
    <div className={top ? 'navbar-top' : 'navbar'}>
        <ul>
            <li>
                <a className='navlink' href="#about">About</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
      
    </div>
  )
}

export default Navbar

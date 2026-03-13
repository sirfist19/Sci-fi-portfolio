import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Using HashLink so scrolling to ID elements works across routes

const Navbar = ({ top }) => {
    return (
        <div className={top ? 'navbar-top' : 'navbar'}>
            <ul>
                <li>
                    <Link className='navlink' to="/#about">About</Link>
                </li>
                <li>
                    <Link className='navlink' to="/#skills">Skills</Link>
                </li>
                <li>
                    <Link className='navlink' to="/#projects">Projects</Link>
                </li>
                <li>
                    <Link className='navlink' to="/life">Life</Link>
                </li>
                <li>
                    <Link className='navlink' to='/#contact'>Contact</Link>
                </li>
            </ul>

        </div>
    )
}
export default Navbar;

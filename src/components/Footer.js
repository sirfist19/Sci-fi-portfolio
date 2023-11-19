import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faGlobe, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
        <ul className='social-links'>
            <li>
            <FontAwesomeIcon icon={faGithub} style={{color: '#39ff14'}} size='2xl'/>
            </li>
            <li>
                <FontAwesomeIcon icon={faInstagram} style={{color: '#39ff14'}} size='2xl'/>
            </li>
            <li>
                <FontAwesomeIcon icon={faXTwitter} style={{color: '#39ff14'}} size='2xl'/>
            </li>
        </ul>
        <div className='footer-rights'>
            <p> ©2023 Designed and Programmed by Aidan Cini.</p>
        </div>
    </div>
  )
}

export default Footer

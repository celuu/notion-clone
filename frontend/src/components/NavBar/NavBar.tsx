import { useState } from 'react'
import './NavBar.css'


const NavBar: React.FC  = (closeNavBar, setCloseNavBar): JSX.Element => {
    
    

    return(
        <div className='biggest-container'>
            <div className="nav-container">
                <div className='nav-elements'>
                    <button className="side-bar-close" onClick={() => setCloseNavBar(!closeNavBar)}>close</button>
                        <ul className='side-bar-list'>
                            <li className='side-bar-item'><i className="bi bi-search"></i>Search</li>
                            <li className='side-bar-item'><i className="bi bi-arrow-clockwise"></i>Updates</li>
                            <li className='side-bar-item'><i className="bi bi-gear-fill"></i>Settings & members</li>
                            <li className='side-bar-item'><i className="bi bi-plus-circle-fill"></i>New Page</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
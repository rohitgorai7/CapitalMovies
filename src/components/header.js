import React from 'react';
import './header.css';
const Header = () => {
    return(
        <div onClick={() => window.scroll(0,0)} className="header d-flex fixed-top bg-dark ">
            CapitalMovies
        </div>
    )
}

export default Header;
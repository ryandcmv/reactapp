import React from 'react';
import './style.css';
import logo from './senai-logo.png';

function Header() {
    return(
        <header className>Senai Suiço-Brasileira "Paulo Ernesto Tolle"<img src={logo} alt="logo" /><br></br></header>
    );
}

export default Header;
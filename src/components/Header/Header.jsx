import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="h-container">
            <div className="logo">
                <a href="#">
                    <img src="./img/logo.svg" alt="Delgo's logo" width={120}/>
                </a>
            </div>
            <div className="h-menu">
                <a href="#">Products</a>
                <a href="#">Teams</a>
                <a href="#">Platform</a>
                <a href="#">Ressources</a>
            </div>
            <div className="h-login">
                <a href="#">
                    <button className="log">Log In</button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Header
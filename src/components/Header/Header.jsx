import React from 'react'

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="h-container">
            <div className="logo">
                <img src="./img/logo.svg" alt="Delgo's logo" width={200}/>
            </div>
            <div className="h-menu">
                <a href="#">Products</a>
                <a href="#">Teams</a>
                <a href="#">Platform</a>
                <a href="#">Ressources</a>
            </div>
            <div className="h-login">
                <a href="">
                    <button className="log">Log In</button>
                </a>
                <a href="">
                    <button className="create">Create Account</button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Header
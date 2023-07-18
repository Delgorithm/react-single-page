import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <section className="h-page">
        <div className="h-page-first">
            <div className="h-left">
                <h1>Grow your <br></br>business with <br></br>our best services</h1>
                <p>Unlock the potential for growth in your business with our unparalleled services, tailored to elevate your success and expand your horizons.</p>
                <div className="h-search">
                    <input type="text" placeholder='Search your domain now' />
                    <button className="btn-search">Search</button>
                </div>
                <div className="h-review">
                    <p className='h-review-p'>5.0</p>
                    <div className="h-note">
                        <div className="h-note-text">
                            <p>Excellent</p>
                        </div>
                        <div className="h-green">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <p>9.277 reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-right">
                <img src="./img/cryptomockup_1.png" alt="Business man" />
            </div>
        </div>
        <div className="h-page-second">
            <div className="logo-business">
                <img src="./img/Bitcoin-logo.svg" alt="Bitcoin's logo" width={120} height={120}/>
                <img src="./img/Metamask-logo.svg" alt="Metamask's logo" width={120} height={120}/>
                <img src="./img/Cardano-logo.svg" alt="Cardano's logo" width={120} height={120}/>
                <img src="./img/Coinbase-logo-1.svg" alt="Coinbase's logo" width={120} height={120}/>
                <img src="./img/Solana-logo.svg" alt="Solana's logo" width={120} height={120}/>
            </div>
        </div>
    </section>
  )
}

export default Hero

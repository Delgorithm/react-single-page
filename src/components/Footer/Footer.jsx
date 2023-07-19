import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer-section">
        <div className="footer-information">
            <p>Make your business dreams come true</p>
            <div className="footer-info-btn">
                <p>Starting a busines can be a daunting task, but with passion, perseverance, and the right resources, you can turn your business.</p>
                <div className="footer-btn">
                    <button className="getstarted">Get Started</button>
                    <button className="learn">Learn More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
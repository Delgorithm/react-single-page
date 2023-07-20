import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-information">
        <p>Make your business dreams come true</p>
        <div className="footer-info-btn">
          <p>Starting a business can be a daunting task, but with passion, perseverance, and the right resources, you can turn your business.</p>
          <div className="footer-btn">
            <button className="footer-btn-getstarted">Get Started</button>
            <button className="footer-btn-learn">Learn More</button>
          </div>
        </div>
      </div>
      <div className="f-left-right">
        <div className="f-left">
          <p className="f-hosting-service">
            Ghosting
          </p>
          <p>The best web hosting service with the most complete hosting features and 24-hour support.</p>
          <div className="f-network-logos">
            <img src="./img/facebook-logo.png" alt="Facebook's logo" />
            <img src="./img/linkedin-logo.png" alt="Linkedin's logo" />
            <img src="./img/twitter-logo.png" alt="Twitter's logo" />
          </div>
        </div>
        <div className="f-right">
          <div className="f-links">
            <ul>
              <li>
                <p>Platform</p>
                <a href="#">Unlimited Hosting</a>
                <a href="#">VPS</a>
                <a href="#">Domain</a>
                <a href="#">Website Service</a>
              </li>
              <li>
                <p>Solutions</p>
                <a href="#">Start a Trial</a>
                <a href="#">How It Works</a>
                <a href="#">Features</a>
                <a href="#">Examples</a>
              </li>
              <li>
                <p>Company</p>
                <a href="#">About</a>
                <a href="#">Terms</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
              </li>
              <li>
                <p>About Us</p>
                <a href="#">Points</a>
                <a href="#">Become Partner</a>
                <a href="#">Affiliate Program</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

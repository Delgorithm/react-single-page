import React from 'react';
import './Pricing.css';


const Checkbox = ({ label }) => (
    <div className="input-catalog">
        <input type="checkbox" checked readOnly />
        <p>{label}</p>
    </div>
);

const BtnStarted = () => (
    <button className="btn">Get Started</button>
)

const Pricing = () => {
  return (
    <section className="price">
        <div className="trial-text">
            <p>Choose the plan that's yours</p>
            <div className="trial-input">
                <Checkbox label="Free day trial" />
                <Checkbox label="Cancel Anytime" />
                <Checkbox label="Money Back Guarantee" />
            </div>
        </div>
        <div className="trial-catalog">
            <div className="catalog">
                <p>Single</p>
                <p className='trial-price'>$10/monthly</p>
                <p>Get the most complete hosting service at the lowest price.</p>
                <Checkbox label="Up to 135.000 Visitors/Month" />
                <Checkbox label="Unlimited SSD Disk Space" />
                <Checkbox label="Unlimited Bandwith" />
                <Checkbox label="Unlimited Database" />
                <BtnStarted />
            </div>
            <div className="catalog">
                <p>Premium</p>
                <p className='trial-price'>$15/monthly</p>
                <p>Get the most complete hosting service at the lowest price.</p>
                <Checkbox label="Organize CPU 2 Cores" />
                <Checkbox label="RAM 1 GB" />
                <Checkbox label="Disk Space 60 GB" />
                <Checkbox label="Bandwidth 2 TB" />
                <BtnStarted />
            </div>
            <div className="catalog">
                <p>Business</p>
                <p className='trial-price'>$20/monthly</p>
                <p>Get the most complete hosting service at the lowest price.</p>
                <Checkbox label="Free to Choose Extension" />
                <Checkbox label="Many Cheap Domain Promos" />
                <Checkbox label="Trusted Domain Provider" />
                <Checkbox label="24/7 Technical Support" />
                <BtnStarted />
            </div>
        </div>
    </section>
  )
}

export default Pricing
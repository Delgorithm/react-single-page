import React from 'react';
import './Pricing.css';


const Checkbox = ({ label }) => (
    <div className="input-catalog">
        <input type="checkbox" checked readOnly />
        <p>{label}</p>
    </div>
);

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
            <div className="first-catalog">
                <p>Single</p>
                <p className='trial-price'>$10<span>/monthly</span></p>
                <p>Get the most complete hosting service at the lowest price.</p>
                <Checkbox label="Up to 135.000 Visitors/Month" />
                <Checkbox label="Unlimited SSD Disk Space" />
                <Checkbox label="Unlimited Bandwith" />
                <Checkbox label="Unlimited Database" />
            </div>
            <div className="second-catalog">
                <p>Premium</p>
                <p className='trial-price'>$15<span>/monthly</span></p>
                <p>Get the most complete hosting service at the lowest price.</p>
                <Checkbox label="Up to 135.000 Visitors/Month" />
                <Checkbox label="Unlimited SSD Disk Space" />
                <Checkbox label="Unlimited Bandwith" />
                <Checkbox label="Unlimited Database" />
            </div>
            <div className="third-catalog">
                <p>Business</p>
                <p className='trial-price'>$20<span>/monthly</span></p>
                <p>Get the most complete hosting service at the lowest price.</p>
                <Checkbox label="Up to 135.000 Visitors/Month" />
                <Checkbox label="Unlimited SSD Disk Space" />
                <Checkbox label="Unlimited Bandwith" />
                <Checkbox label="Unlimited Database" />
            </div>
        </div>
    </section>
  )
}

export default Pricing
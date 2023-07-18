import React from 'react'
import './Testimonials.css';

const Testimonial = ({ name, role, quote, smallReview,logo, imgb}) => {
    return (
        <div className="review">
            <div className="profil-pfp">
                <img src={logo} alt="Client's profil picture" />
                <div className="profil-name">
                    <p>{name}</p>
                    <p>{role}</p>
                </div>
            </div>
            <div className="quote">{quote}</div>
            <div className="second-quote">{smallReview}</div>
            <img className="imgb" src={imgb} alt="" />
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="testimonial">
            <div className="t-title">
                <p>We want to make our clients happy people</p>
                <button>Meet Our Clients</button>
            </div>
            <div className="p-testimonial">
                <div className="three-testimonials">
                    <Testimonial
                        name="Emma Johnson"
                        role="Employee at Binance"
                        quote="Greet service with good quality product"
                        smallReview="I recently purchased a product from this company and I was blown away by the quality."
                        logo="./img/pfp01.png"
                        imgb="./img/binance.svg"
                    />
                    <Testimonial
                        name="Noah Smith"
                        role="Employee at Polkadot"
                        quote="Super friendly and professional service!"
                        smallReview="I recently had the pleasure of working with this company, and I must say."
                        logo="./img/pfp02.png"
                        imgb="./img/Polkadot-logo.svg"
                    />
                    <Testimonial
                        name="Liam Taylor"
                        role="Co-Founder Solana"
                        smallReview="I never thought I'd say this about a company, but these guys are just cool."
                        quote="There are no other words but you guys are cool!"
                        logo="./img/pfp004.png"
                        imgb="./img/Solana-logo.svg"
                    />
                </div>
            </div>
        </section>
    )
}

export default Testimonials
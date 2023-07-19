import React, { useState } from 'react';
import './Faq.css';

const faqCollection = [
    {
        question: "What is meant by hosting?",
        answer: "Hosting refers to the process of storing and making your website or web application accessible on the internet. It involves allocating space on a server to store your website's files and data so that it can be accessed by visitors."
    }, {
        question: "Why do I need hosting?",
        answer: "Hosting is essential for making your website or web application available to users on the internet. Without hosting, your website would not be accessible to anyone outside of your local machine or development environment. Hosting allows your website to be online 24/7, ensuring that visitors can access it anytime from anywhere."
    }, {
        question: "Will I get help with web hosting?",
        answer: "Many hosting providers offer customer support and assistance with web hosting. They can help you with tasks like setting up your hosting account, managing server configurations, troubleshooting issues, and providing guidance on best practices. It's recommended to choose a hosting provider that offers reliable customer support to assist you whenever needed."
    }, {
        question: "What's the difference between domain and hosting?",
        answer: "A domain is the unique address that visitors use to access your website, such as www.example.com. It's like the address of your house. On the other hand, hosting is the service that stores your website's files and makes them available on the internet. It's like the physical space where your house is built. In simple terms, a domain is the address, and hosting is the storage and accessibility of your website."
    }
];

const Faq = () => {
    const [accordion, setAccordion] = useState(null);

    function toggleAccordion(index) {
        setAccordion(accordion === index ? null : index);
    }

  return (
    <section className="faq-section">
        <div className='faq-title-p'>
            <p className='faq-title'>FAQ</p>
            <p>Let's answer your questions together</p>
        </div>
        <div>
            <div className="faq-accordion">
                {faqCollection.map((item, index) =>
                    <div key={index} onClick={() => toggleAccordion(index)}>
                        <div className="faq-accordion-sign">
                            <div className="accordion-heading">
                                <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                            </div>
                            <div>
                                {accordion === index ? (
                                    <>
                                        <span className='verticle'>-</span>
                                    </>
                                ) : (
                                    <>
                                        <span className='verticle'>+</span>
                                    </>
                                )}
                            </div>
                        </div>
                            <div>
                                <p className={accordion === index ? "active" : "inactive"}>
                                    {item.answer}
                                </p>
                            </div>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default Faq
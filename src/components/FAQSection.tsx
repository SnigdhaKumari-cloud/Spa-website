import { useState } from 'react';
import { faqData } from '../data';
import SectionHeader from './SectionHeader';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section faq-section" id="faq">
            <div className="container">
                <SectionHeader
                    subtitle="Common Inquiries"
                    title="Frequently Asked Questions"
                    description="Everything you need to know before your visit to Serenity Spa."
                />
                <div className="faq-container">
                    {faqData.map((faq, i) => (
                        <div
                            key={i}
                            className={`faq-item ${openIndex === i ? 'active' : ''}`}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            <div className="faq-question">
                                <h3>{faq.q}</h3>
                                <i className={`fas ${openIndex === i ? 'fa-minus' : 'fa-plus'}`}></i>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

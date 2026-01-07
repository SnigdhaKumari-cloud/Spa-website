import { useState, FormEvent, ChangeEvent } from 'react';
import SectionHeader from '../components/SectionHeader';
import { faqData, serviceOptions } from '../data';
import { BUSINESS_INFO } from '../constants';
import type { ContactFormData } from '../types';

export default function Contact(): JSX.Element {
    const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', phone: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <section style={{ padding: '180px 0 80px', background: 'var(--gradient-warm)', textAlign: 'center' }}>
                <div className="container">
                    <span className="subtitle">Get in Touch</span>
                    <h1 style={{ marginTop: 'var(--space-sm)' }}>Contact & Booking</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info reveal">
                            <h3>Visit Our Sanctuary</h3>

                            <div className="contact-item">
                                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                                <div className="contact-details">
                                    <h4>Location</h4>
                                    <p>{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.suite}<br />{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon"><i className="fas fa-phone"></i></div>
                                <div className="contact-details">
                                    <h4>Phone</h4>
                                    <p>{BUSINESS_INFO.phone}</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                                <div className="contact-details">
                                    <h4>Email</h4>
                                    <p>{BUSINESS_INFO.email}</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon"><i className="fas fa-clock"></i></div>
                                <div className="contact-details">
                                    <h4>Hours</h4>
                                    <p>{BUSINESS_INFO.hours.weekday.days}: {BUSINESS_INFO.hours.weekday.hours}<br />{BUSINESS_INFO.hours.saturday.days}-{BUSINESS_INFO.hours.sunday.days}: {BUSINESS_INFO.hours.saturday.hours}</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper reveal">
                            <h3>Book Your Appointment</h3>

                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
                                    <div style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>✓</div>
                                    <h4>Thank You!</h4>
                                    <p>We'll contact you shortly to confirm your booking.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="service">Service Interest</label>
                                        <select id="service" name="service" value={formData.service} onChange={handleChange}>
                                            {serviceOptions.map((opt) => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your preferences..."></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                        Request Booking
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section" style={{ background: 'var(--color-accent-light)' }}>
                <div className="container">
                    <SectionHeader subtitle="Common Questions" title="FAQ" />
                    <div className="grid grid-2">
                        {faqData.map((faq, i) => (
                            <div key={i} className="reveal" style={{
                                background: 'var(--color-surface)',
                                padding: 'var(--space-xl)',
                                borderRadius: 'var(--radius-xl)',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                <h4 style={{ marginBottom: 'var(--space-sm)' }}>{faq.q}</h4>
                                <p style={{ color: 'var(--color-text-light)' }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

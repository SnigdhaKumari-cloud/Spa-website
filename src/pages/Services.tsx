import { JSX } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { serviceCategories } from '../data';

export default function Services(): JSX.Element {
    return (
        <>
            <section style={{ padding: '180px 0 80px', background: 'var(--gradient-warm)', textAlign: 'center' }}>
                <div className="container">
                    <span className="subtitle">Our Expertise</span>
                    <h1 style={{ marginTop: 'var(--space-sm)' }}>Premium Spa Services</h1>
                    <p style={{ maxWidth: 600, margin: 'var(--space-md) auto 0', color: 'var(--color-text-light)' }}>
                        Discover treatments designed to rejuvenate your body, mind, and soul.
                    </p>
                </div>
            </section>

            {Object.entries(serviceCategories).map(([key, category], index) => (
                <section key={key} className="section" style={{ background: index % 2 ? 'var(--color-accent-light)' : 'white' }}>
                    <div className="container">
                        <div className="reveal">
                            <SectionHeader subtitle={category.subtitle} title={category.title} description={category.description} />
                        </div>
                        <div className="grid grid-3">
                            {category.services.slice(0, 3).map((service, i) => (
                                <div key={i} className={`card reveal ${service.featured ? 'featured' : ''}`}>
                                    <div className="card-image">
                                        <img src={category.image} alt={service.name} loading="lazy" />
                                        {service.featured && <span className="card-badge">Popular</span>}
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">{service.name}</h3>
                                        <p className="card-text">{service.desc}</p>
                                        <div className="flex-between">
                                            <span className="card-price">${service.price}</span>
                                            <span style={{ color: 'var(--color-text-muted)' }}>{service.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
                            <Link to={`/services/${key}`} className="btn btn-primary">
                                View All {category.title} <i className="fas fa-arrow-right" style={{ marginLeft: 8 }}></i>
                            </Link>
                        </div>
                    </div>
                </section>
            ))}

            <section className="newsletter">
                <div className="newsletter-content reveal">
                    <h2>Ready to Experience Serenity?</h2>
                    <p>Book your appointment today.</p>
                    <Link to="/contact" className="btn btn-white btn-lg">Book Now</Link>
                </div>
            </section>
        </>
    );
}

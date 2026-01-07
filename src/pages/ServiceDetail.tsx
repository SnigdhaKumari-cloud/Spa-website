import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SectionHeader from '../components/SectionHeader';
import { serviceCategories } from '../data';

export default function ServiceDetail(): JSX.Element {
    const { serviceType } = useParams<{ serviceType: string }>();
    const category = serviceType ? serviceCategories[serviceType] : undefined;

    if (!category) {
        return (
            <section className="section" style={{ paddingTop: 150, textAlign: 'center' }}>
                <h1>Service Not Found</h1>
                <Link to="/services" className="btn btn-primary">Back to Services</Link>
            </section>
        );
    }

    return (
        <>
            <Breadcrumb items={[
                { label: 'Home', link: '/' },
                { label: 'Services', link: '/services' },
                { label: category.title }
            ]} />

            {/* Hero */}
            <section style={{ padding: '40px 0 80px', background: 'var(--color-accent-light)' }}>
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content reveal">
                            <span className="subtitle">{category.subtitle}</span>
                            <h1>{category.title}</h1>
                            <p>{category.description}</p>
                            <div className="about-features" style={{ marginTop: 'var(--space-xl)' }}>
                                <div className="about-feature">
                                    <span className="about-feature-icon"><i className="fas fa-clock"></i></span>
                                    <span>{category.services[0].duration} - {category.services[category.services.length - 1].duration}</span>
                                </div>
                                <div className="about-feature">
                                    <span className="about-feature-icon"><i className="fas fa-dollar-sign"></i></span>
                                    <span>From ${Math.min(...category.services.map(s => s.price))}</span>
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-primary btn-lg" style={{ marginTop: 'var(--space-xl)' }}>
                                <i className="fas fa-calendar-check"></i> Book Your Session
                            </Link>
                        </div>
                        <div className="about-images reveal">
                            <div className="about-image-main">
                                <img src={category.image} alt={category.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Options */}
            <section className="section">
                <div className="container">
                    <SectionHeader subtitle="Choose Your Treatment" title={`${category.title} Options`} />

                    {category.services.map((service, i) => (
                        <div
                            key={i}
                            className="reveal"
                            style={{
                                background: 'var(--color-surface)',
                                borderRadius: 'var(--radius-2xl)',
                                padding: 'var(--space-2xl)',
                                marginBottom: 'var(--space-xl)',
                                boxShadow: 'var(--shadow-md)',
                                border: service.featured ? '2px solid var(--color-secondary)' : 'none',
                                position: 'relative'
                            }}
                        >
                            {service.featured && (
                                <span style={{
                                    background: 'var(--gradient-gold)',
                                    padding: '5px 15px',
                                    borderRadius: 20,
                                    fontSize: 12,
                                    position: 'absolute',
                                    top: -12
                                }}>
                                    ⭐ Popular
                                </span>
                            )}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-lg)' }}>
                                <div style={{ flex: 1, minWidth: 200 }}>
                                    <h3 style={{ marginBottom: 'var(--space-sm)' }}>{service.name}</h3>
                                    <p style={{ color: 'var(--color-text-light)' }}>{service.desc}</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', color: 'var(--color-primary)', fontWeight: 700 }}>
                                        ${service.price}
                                    </div>
                                    <div style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-md)' }}>
                                        {service.duration}
                                    </div>
                                    <Link to="/contact" className={`btn ${service.featured ? 'btn-secondary' : 'btn-primary'}`}>
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Services */}
            <section className="section" style={{ background: 'var(--color-accent-light)' }}>
                <div className="container">
                    <SectionHeader subtitle="Explore More" title="Related Services" />
                    <div className="grid grid-3 reveal">
                        {Object.entries(serviceCategories)
                            .filter(([key]) => key !== serviceType)
                            .slice(0, 3)
                            .map(([key, cat]) => (
                                <Link key={key} to={`/services/${key}`} className="service-card">
                                    <div className="service-card-image">
                                        <img src={cat.image} alt={cat.title} loading="lazy" />
                                    </div>
                                    <div className="service-card-overlay">
                                        <h3 className="service-card-title">{cat.title}</h3>
                                        <span className="service-card-price">From ${Math.min(...cat.services.map(s => s.price))}</span>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}

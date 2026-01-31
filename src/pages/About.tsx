import { useState, useEffect, JSX } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { receptionImg, heroImg, massageImg, facialImg, bodyImg, nailImg } from '../assets/images';
import { coreValues, teamMembers, certifications, stats, mediaFeatures } from '../data';
import AnimatedCounter from '../components/AnimatedCounter';

// Gallery images data
const galleryImages = [
    { src: heroImg, category: 'spa', title: 'Luxury Interior' },
    { src: massageImg, category: 'massage', title: 'Massage Room' },
    { src: facialImg, category: 'facial', title: 'Facial Treatment' },
    { src: bodyImg, category: 'body', title: 'Body Treatment' },
    { src: nailImg, category: 'nails', title: 'Nail Station' },
    { src: receptionImg, category: 'spa', title: 'Reception Area' },
];

// Locations data
const locations = [
    {
        name: 'Serenity Spa - Manhattan',
        address: '123 Fifth Avenue, New York, NY 10010',
        phone: '(212) 555-0123',
        hours: 'Mon-Sat: 9AM-9PM, Sun: 10AM-7PM',
        featured: true
    },
    {
        name: 'Serenity Spa - Brooklyn',
        address: '456 Atlantic Avenue, Brooklyn, NY 11217',
        phone: '(718) 555-0456',
        hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-6PM',
        featured: false
    },
    {
        name: 'Serenity Spa - Upper East Side',
        address: '789 Madison Avenue, New York, NY 10065',
        phone: '(212) 555-0789',
        hours: 'Mon-Sat: 9AM-9PM, Sun: 10AM-7PM',
        featured: false
    }
];

export default function About(): JSX.Element {
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);
    const location = useLocation();

    // Handle hash scrolling
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>

            {/* Hero */}
            <section className="about-hero">
                <div className="container">
                    <span className="subtitle animate-fade-down">Discover Us</span>
                    <h1 className="animate-fade-up">About Serenity Spa</h1>
                    <p className="animate-fade-up delay-100">
                        A destination for renewal, confidence, and craft.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="section" id="story">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content reveal">
                            <span className="subtitle">Since 2009</span>
                            <h2>Our Story</h2>
                            <p>For over 15 years, Serenity Spa has been a sanctuary of peace in the heart of New York City.
                                Founded with a vision to bring holistic wellness to busy urban professionals, we've grown into
                                one of the most trusted names in luxury spa experiences.</p>
                            <p>Our team of certified therapists combines ancient healing traditions with modern techniques
                                to deliver transformative treatments that nurture your body, mind, and soul.</p>
                        </div>
                        <div className="about-images reveal">
                            {/* Decorative background blob or shape can be added via CSS on .about-images::before if needed */}
                            <div className="about-image-main">
                                <img src={receptionImg} alt="Serenity Spa Reception" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission & Values */}
            <section className="section" id="mission" style={{ background: 'var(--color-background)' }}>
                <div className="container">
                    <SectionHeader
                        subtitle="Our Mission"
                        title="The Serenity Philosophy"
                        description="We believe in holistic healing and the power of professional touch to restore balance."
                    />
                    <div className="grid grid-4">
                        {coreValues.map((v, i) => (
                            <div key={i} className="value-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                                <div className="value-image-container">
                                    <img src={v.image} alt={v.title} className="value-image" />
                                </div>
                                <h3>{v.title}</h3>
                                <p style={{ color: 'var(--color-text-light)' }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Expertise - Team */}
            <section className="section">
                <div className="container">
                    <SectionHeader subtitle="Our Expertise" title="Expert Therapists" />
                    <div className="grid grid-4">
                        {teamMembers.map((member, i) => (
                            <div key={i} className="team-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="team-avatar"
                                />
                                <div className="team-role">{member.role}</div>
                                <h4>{member.name}</h4>
                                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)' }}>{member.exp} experience</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="section" id="gallery" style={{ background: 'var(--color-accent-light)' }}>
                <div className="container">
                    <SectionHeader subtitle="Visual Journey" title="Our Gallery" />
                    <div className="gallery-grid">
                        {galleryImages.map((img, i) => (
                            <div key={i} className="gallery-item reveal" onClick={() => setLightboxImg(img.src)}>
                                <img src={img.src} alt={img.title} loading="lazy" />
                                <div className="gallery-overlay">
                                    <div className="gallery-icon"><ion-icon name="resize-outline"></ion-icon></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Locations */}
            <section className="section" id="locations">
                <div className="container">
                    <SectionHeader
                        subtitle="Visit Us"
                        title="Our Locations"
                        description="Find a Serenity Spa near you."
                    />
                    <div className="grid grid-3">
                        {locations.map((loc, i) => (
                            <div key={i} className={`location-card reveal ${loc.featured ? 'featured' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
                                {loc.featured && <div className="location-flag">Flagship</div>}
                                <h3 className="location-name">
                                    <ion-icon name="flower-outline" style={{ color: 'var(--color-primary)' }}></ion-icon>
                                    {loc.name}
                                </h3>
                                <div className="location-detail">
                                    <ion-icon name="location-outline"></ion-icon>
                                    <span>{loc.address}</span>
                                </div>
                                <div className="location-detail">
                                    <ion-icon name="call-outline"></ion-icon>
                                    <span>{loc.phone}</span>
                                </div>
                                <div className="location-detail">
                                    <ion-icon name="time-outline"></ion-icon>
                                    <span>{loc.hours}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* As Featured In */}
            <section className="section" style={{ padding: 'var(--space-3xl) 0', borderTop: '1px solid var(--color-border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-xl)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: 'var(--text-xs)' }}>As Featured In</h4>
                    <div className="media-logos-container reveal">
                        {mediaFeatures.map((name, i) => (
                            <div key={i} className="media-logo-item">
                                <i className="fas fa-newspaper" style={{ color: 'var(--color-primary)', fontSize: '0.8em' }}></i> {name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications (Visual update) */}
            <section className="certifications-bar" style={{ background: 'var(--color-surface)', borderTop: 'none' }}>
                <div className="container">
                    <div className="certifications-grid">
                        {certifications.map((cert, i) => (
                            <div key={i} className="certification-item reveal">
                                <div className="certification-icon" style={{ background: 'var(--color-accent-light)', color: 'var(--color-primary)' }}><ion-icon name={cert.icon}></ion-icon></div>
                                <span className="certification-text" style={{ fontWeight: 500 }}>{cert.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxImg && (
                <div className="lightbox active" onClick={() => setLightboxImg(null)}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <img src={lightboxImg} alt="Lightbox" />
                    </div>
                    <button className="lightbox-close" onClick={() => setLightboxImg(null)}>&times;</button>
                </div>
            )}
        </>
    );
}

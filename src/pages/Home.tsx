import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { heroImg } from '../assets/images';
import { homeServices, stats, mediaFeatures } from '../data';
import AnimatedCounter from '../components/AnimatedCounter';
import PackagesSection from '../components/PackagesSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import PhilosophySection from '../components/PhilosophySection';
import TherapistsSection from '../components/TherapistsSection';
import FAQSection from '../components/FAQSection';
import { JSX } from 'react';

export default function Home(): JSX.Element {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="hero-bg">
                    <img src={heroImg} alt="Luxury spa interior" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-subtitle">Welcome to Serenity</span>
                        <h1 className="hero-title">Experience Pure<br />Relaxation</h1>
                        <p className="hero-text">Escape the everyday and immerse yourself in a world of tranquility. Our expert therapists combine ancient healing traditions with modern techniques to rejuvenate your body, mind, and soul.</p>
                        <div className="hero-buttons">
                            <Link to="/services" className="btn btn-secondary btn-lg">Explore Services</Link>
                            <Link to="/booking" className="btn btn-white btn-lg">Book Appointment</Link>
                        </div>
                    </div>
                </div>
                <div className="hero-scroll" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                    <div className="mouse"></div>
                    <span>Scroll Down</span>
                </div>
            </section>

            {/* Services Section */}
            <section className="section" id="services">
                <div className="container">
                    <SectionHeader
                        subtitle="Our Expertise"
                        title="Premium Spa Services"
                        description="Discover our range of treatments designed to rejuvenate your body, mind, and soul."
                    />
                    <div className="grid grid-4">
                        {homeServices.map((service, i) => (
                            <Link to={service.link} className="service-card reveal" key={i}>
                                <div className="service-card-image">
                                    <img src={service.img} alt={service.title} loading="lazy" />
                                </div>
                                <div className="service-card-overlay">
                                    <div className="service-card-icon"><i className={`fas ${service.icon}`}></i></div>
                                    <h3 className="service-card-title">{service.title}</h3>
                                    <span className="service-card-price">From ${service.price}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <PhilosophySection />

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, i) => {
                            const numValue = parseFloat(stat.num);
                            const suffix = stat.num.replace(/[0-9.]/g, '');
                            return (
                                <AnimatedCounter
                                    key={i}
                                    value={numValue}
                                    suffix={suffix}
                                    label={stat.label}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            <TherapistsSection />

            {/* Packages Section */}
            <PackagesSection />



            {/* Testimonials */}
            <section className="section testimonials" id="testimonials">
                <div className="container">
                    <SectionHeader subtitle="Client Love" title="What Our Guests Say" description="Discover why thousands of clients trust Serenity Spa for their wellness journey." />
                    <TestimonialsCarousel />
                </div>
            </section>

            <FAQSection />

            {/* As Featured In */}
            <section className="as-seen-on">
                <h4>As Featured In</h4>
                <div className="media-logos">
                    {mediaFeatures.map((name, i) => (
                        <span key={i} className="media-logo"><i className="fas fa-newspaper"></i> {name}</span>
                    ))}
                </div>
            </section>



            {/* Newsletter */}
            <section className="newsletter">
                <div className="newsletter-content reveal">
                    <h2>Join Our Wellness Community</h2>
                    <p>Subscribe to receive exclusive offers and wellness tips.</p>
                    <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
                        <input type="email" className="newsletter-input" placeholder="Enter your email address" required />
                        <button type="submit" className="btn btn-white">Subscribe</button>
                    </form>
                </div>
            </section>
        </>
    );
}

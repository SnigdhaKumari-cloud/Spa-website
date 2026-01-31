import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

export default function Footer(): JSX.Element {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo">
                            <div className="logo-icon"><i className="fas fa-spa"></i></div>
                            <span className="logo-text">{BUSINESS_INFO.name}</span>
                        </div>
                        <p>{BUSINESS_INFO.tagline}</p>
                        <div className="social-links" style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
                            <a href={BUSINESS_INFO.social.facebook} aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href={BUSINESS_INFO.social.instagram} aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href={BUSINESS_INFO.social.twitter} aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href={BUSINESS_INFO.social.pinterest} aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services/spa">Spa Experiences</Link></li>

                            <li><Link to="/services/massage">Massage Therapy</Link></li>
                            <li><Link to="/services/facial">Facial Treatments</Link></li>
                            <li><Link to="/services/body">Body Treatments</Link></li>
                            <li><Link to="/services/nails">Nail Services</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Contact</h4>
                        <ul className="footer-links">
                            <li>{BUSINESS_INFO.address.street}</li>
                            <li>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</li>
                            <li>{BUSINESS_INFO.phone}</li>
                            <li>{BUSINESS_INFO.email}</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Hours</h4>
                        <ul className="footer-hours">
                            <li><span>{BUSINESS_INFO.hours.weekday.days}</span><span>{BUSINESS_INFO.hours.weekday.hours}</span></li>
                            <li><span>{BUSINESS_INFO.hours.saturday.days}</span><span>{BUSINESS_INFO.hours.saturday.hours}</span></li>
                            <li><span>{BUSINESS_INFO.hours.sunday.days}</span><span>{BUSINESS_INFO.hours.sunday.hours}</span></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cancellation Policy</a>
                        <Link to="/spa-policies">Spa Policies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

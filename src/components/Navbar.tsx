import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, JSX } from 'react';

export default function Navbar(): JSX.Element {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = (): void => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClass = scrolled || !isHome ? 'navbar scrolled' : 'navbar';

    return (
        <nav className={navClass} id="navbar">
            <div className="container">
                <Link to="/" className="logo">
                    <div className="logo-icon"><i className="fas fa-spa"></i></div>
                    <span className="logo-text" style={{ color: scrolled || !isHome ? 'var(--color-text)' : 'white' }}>
                        Serenity Spa
                    </span>
                </Link>

                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/services" className="nav-link">Services</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    <div className="nav-cta">
                        <Link to="/booking" className="btn btn-secondary btn-sm">Book Now</Link>
                    </div>
                </ul>

                <button
                    className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span style={{ background: scrolled || !isHome ? 'var(--color-text)' : 'white' }}></span>
                    <span style={{ background: scrolled || !isHome ? 'var(--color-text)' : 'white' }}></span>
                    <span style={{ background: scrolled || !isHome ? 'var(--color-text)' : 'white' }}></span>
                </button>
            </div>

            {menuOpen && <div className="mobile-overlay active" onClick={() => setMenuOpen(false)}></div>}
        </nav>
    );
}

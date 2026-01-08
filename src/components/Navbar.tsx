import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, JSX, useRef } from 'react';
import MegaMenu from './MegaMenu';

export default function Navbar(): JSX.Element {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = (): void => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setMegaMenuOpen(false);
            }
        };

        if (megaMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [megaMenuOpen]);

    useEffect(() => {
        setMegaMenuOpen(false);
        setMenuOpen(false);
    }, [location.pathname]);

    const navClass = scrolled || !isHome || megaMenuOpen ? 'navbar scrolled' : 'navbar';

    const toggleMegaMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setMegaMenuOpen(!megaMenuOpen);
    };

    return (
        <nav className={navClass} id="navbar">
            <div className="container">
                <Link to="/" className="logo">
                    <div className="logo-icon"><i className="fas fa-spa"></i></div>
                    <span className="logo-text" style={{ color: scrolled || !isHome || megaMenuOpen ? 'var(--color-text)' : 'white' }}>
                        Serenity Spa
                    </span>
                </Link>

                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li
                        ref={dropdownRef}
                        className={`nav-item dropdown ${megaMenuOpen ? 'active' : ''}`}
                    >
                        <a
                            href="#services"
                            className="nav-link"
                            onClick={toggleMegaMenu}
                        >
                            Services
                            <i className={`fas fa-chevron-down dropdown-icon ${megaMenuOpen ? 'active' : ''}`}></i>
                        </a>
                        <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
                    </li>
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
                    <span style={{ background: scrolled || !isHome || megaMenuOpen ? 'var(--color-text)' : 'white' }}></span>
                    <span style={{ background: scrolled || !isHome || megaMenuOpen ? 'var(--color-text)' : 'white' }}></span>
                    <span style={{ background: scrolled || !isHome || megaMenuOpen ? 'var(--color-text)' : 'white' }}></span>
                </button>
            </div>

            {menuOpen && <div className="mobile-overlay active" onClick={() => setMenuOpen(false)}></div>}
        </nav>
    );
}

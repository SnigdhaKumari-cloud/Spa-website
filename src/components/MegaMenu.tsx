import { useState, JSX } from 'react';
import { Link } from 'react-router-dom';
import { megaMenuData } from '../data';

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps): JSX.Element {
    const [activeService, setActiveService] = useState(megaMenuData.services[0]);

    return (
        <div className={`mega-menu ${isOpen ? 'active' : ''}`} onMouseLeave={onClose}>
            <div className="mega-menu-container">
                <div className="mega-menu-content">
                    {/* Left Side: Service List */}
                    <div className="mega-menu-left">
                        <span className="mega-menu-label">SERVICES</span>
                        <ul className="mega-menu-list">
                            {megaMenuData.services.map((service, index) => (
                                <li
                                    key={index}
                                    className={activeService.title === service.title ? 'active' : ''}
                                    onMouseEnter={() => setActiveService(service)}
                                >
                                    <Link to={service.link} onClick={onClose}>
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: Featured Image */}
                    <div className="mega-menu-right">
                        <div className="mega-menu-image">
                            <img src={activeService.image} alt={activeService.title} />
                            <div className="mega-menu-image-overlay">
                                <h3>{activeService.title}</h3>
                                <p>Discover our range of premium {activeService.title.toLowerCase()} treatments.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bar */}
                <div className="mega-menu-footer">
                    <div className="mega-menu-footer-buttons">
                        <Link to="/booking" className="btn btn-secondary" onClick={onClose}>Book Now</Link>
                        <Link to="/gift-cards" className="btn btn-outline" onClick={onClose}>Buy a Gift Card</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

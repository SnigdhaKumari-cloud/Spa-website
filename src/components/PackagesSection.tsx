import { JSX } from 'react';
import SectionHeader from './SectionHeader';
import { membershipPackages } from '../data';
import { Link } from 'react-router-dom';

export default function PackagesSection(): JSX.Element {
    return (
        <section className="section packages-section" id="packages">
            <div className="container">
                <div className="packages-intro">
                    <h2 className="packages-main-title">TAKE TIME TO LOVE YOURSELF.</h2>
                    <p className="packages-main-subtitle">SAVE AN AVERAGE OF 33% ON SERVICES AS A MEMBER!</p>
                </div>

                <div className="packages-grid">
                    {membershipPackages.map((pkg, i) => (
                        <div key={i} className={`package-card reveal ${pkg.featured ? 'featured' : ''} tier-${pkg.name.toLowerCase()}`}>
                            <div className="package-image-container">
                                <div className="package-image">
                                    <img src={pkg.image} alt={pkg.name} />
                                </div>
                                <div className="package-tier-label">
                                    <span>{pkg.name}</span>
                                </div>
                                {pkg.featured && (
                                    <div className="popular-ribbon">
                                        <span>Most Popular</span>
                                    </div>
                                )}
                            </div>

                            <div className="package-content">
                                <h3 className="package-name">{pkg.name}</h3>
                                <p className="package-tagline">{pkg.tagline}</p>

                                <ul className="package-features">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="package-feature">
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="package-footer">
                                    <div className="package-price">
                                        <span className="currency">$</span>
                                        <span className="amount">{pkg.price}</span>
                                        <span className="period">/ month</span>
                                    </div>
                                    <p className="package-savings">{pkg.savings}</p>
                                    <Link to="/booking" className={`btn ${pkg.featured ? 'btn-gold' : 'btn-outline'} btn-full`}>
                                        JOIN NOW
                                    </Link>
                                    {pkg.name === 'Gold' && (
                                        <p className="package-note">*Can Be Shared With ONE Family Member*</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


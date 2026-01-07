import { JSX } from 'react';
import SectionHeader from './SectionHeader';
import { spaPackages } from '../data';
import { Link } from 'react-router-dom';

export default function PackagesSection(): JSX.Element {
    return (
        <section className="section packages-section" id="packages">
            <div className="container">
                <SectionHeader
                    subtitle="Investment in Wellness"
                    title="Spa Packages"
                    description="Choose the perfect package for your journey to relaxation and rejuvenation."
                />

                <div className="packages-grid">
                    {spaPackages.map((pkg, i) => (
                        <div key={i} className={`package-card reveal ${pkg.featured ? 'featured' : ''}`}>
                            {pkg.featured && <div className="package-badge">Most Popular</div>}

                            <div className="package-icon">{pkg.icon}</div>

                            <h3 className="package-name">{pkg.name}</h3>
                            <p className="package-tagline">{pkg.tagline}</p>

                            <div className="package-price">
                                <span className="currency">$</span>
                                <span className="amount">{pkg.price}</span>
                                <span className="period">/ session</span>
                            </div>

                            <ul className="package-features">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="package-feature">
                                        <i className="fas fa-check"></i>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/booking" className={`btn ${pkg.featured ? 'btn-secondary' : 'btn-outline'} btn-full`}>
                                Book This Package
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { Link } from 'react-router-dom';
import type { Service } from '../types';
import { JSX } from 'react';

interface ServiceCardProps {
    service: Service;
    categoryImage: string;
    featured?: boolean;
}

export default function ServiceCard({ service, categoryImage, featured }: ServiceCardProps): JSX.Element {
    return (
        <div className={`card reveal ${featured ? 'featured' : ''}`}>
            <div className="card-image">
                <img src={categoryImage} alt={service.name} loading="lazy" />
                {service.featured && <span className="card-badge">Popular</span>}
            </div>
            <div className="card-content">
                <h3 className="card-title">{service.name}</h3>
                <p className="card-text">{service.desc}</p>
                <div className="flex-between">
                    <span className="card-price">${service.price}</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>{service.duration}</span>
                </div>
                <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'var(--space-md)', width: '100%' }}>
                    Book Now
                </Link>
            </div>
        </div>
    );
}

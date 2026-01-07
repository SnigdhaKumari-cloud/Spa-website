import React from 'react';
import { Link } from 'react-router-dom';
import type { BreadcrumbItem } from '../types';

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps): React.ReactElement {
    return (
        <nav className="breadcrumb" style={{ padding: '120px 0 20px', background: 'var(--color-accent-light)' }}>
            <div className="container">
                <ul className="breadcrumb-list" style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                    {items.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                            {item.link ? (
                                <Link to={item.link} style={{ color: 'var(--color-primary)' }}>{item.label}</Link>
                            ) : (
                                <span style={{ color: 'var(--color-text-light)' }}>{item.label}</span>
                            )}
                            {i < items.length - 1 && <span style={{ color: 'var(--color-text-muted)' }}>/</span>}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

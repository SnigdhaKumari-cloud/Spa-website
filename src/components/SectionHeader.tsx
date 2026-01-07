import { JSX } from 'react';

interface SectionHeaderProps {
    subtitle: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
}

export default function SectionHeader({ subtitle, title, description, align = 'center' }: SectionHeaderProps): JSX.Element {
    return (
        <div className={`section-header ${align === 'left' ? 'text-left' : ''}`}>
            <span className="subtitle">{subtitle}</span>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
}

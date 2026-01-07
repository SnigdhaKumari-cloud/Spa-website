interface SectionHeaderProps {
    subtitle: string;
    title: string;
    description?: string;
}

export default function SectionHeader({ subtitle, title, description }: SectionHeaderProps): JSX.Element {
    return (
        <div className="section-header">
            <span className="subtitle">{subtitle}</span>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
}

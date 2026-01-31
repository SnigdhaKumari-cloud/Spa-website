import { JSX } from 'react';
import SectionHeader from '../components/SectionHeader';
import { teamMembers, certifications } from '../data';

export default function Experts(): JSX.Element {
    return (
        <>
            <section style={{ padding: '180px 0 80px', background: 'var(--gradient-warm)', textAlign: 'center' }}>
                <div className="container">
                    <span className="subtitle">Our Team</span>
                    <h1 style={{ marginTop: 'var(--space-sm)' }}>Meet Our Experts</h1>
                    <p style={{ maxWidth: '600px', margin: 'var(--space-lg) auto 0', color: 'var(--color-text-light)' }}>
                        Our certified professionals are dedicated to your holistic well-being and renewal.
                    </p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-4">
                        {teamMembers.map((member, i) => (
                            <div key={i} className="reveal" style={{
                                background: 'var(--color-surface)',
                                borderRadius: 'var(--radius-xl)',
                                padding: 'var(--space-xl)',
                                textAlign: 'center',
                                boxShadow: 'var(--shadow-md)'
                            }}>
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    style={{ width: 120, height: 120, borderRadius: '50%', marginBottom: 'var(--space-md)', objectFit: 'cover' }}
                                />
                                <h4>{member.name}</h4>
                                <p style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-xs)' }}>{member.role}</p>
                                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-sm)' }}>{member.exp} experience</p>
                                {member.bio && (
                                    <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)' }}>{member.bio}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="certifications-bar">
                <div className="container">
                    <div className="certifications-grid">
                        {certifications.map((cert, i) => (
                            <div key={i} className="certification-item reveal">
                                <div className="certification-icon"><ion-icon name={cert.icon}></ion-icon></div>
                                <span className="certification-text">{cert.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

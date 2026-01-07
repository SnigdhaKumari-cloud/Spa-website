import SectionHeader from '../components/SectionHeader';
import { receptionImg } from '../assets/images';
import { coreValues, teamMembers, certifications } from '../data';

export default function About(): JSX.Element {
    return (
        <>
            <section style={{ padding: '180px 0 80px', background: 'var(--gradient-warm)', textAlign: 'center' }}>
                <div className="container">
                    <span className="subtitle">Our Story</span>
                    <h1 style={{ marginTop: 'var(--space-sm)' }}>About Serenity Spa</h1>
                </div>
            </section>

            {/* About Story */}
            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content reveal">
                            <span className="subtitle">Since 2009</span>
                            <h2>A Legacy of Wellness</h2>
                            <p>For over 15 years, Serenity Spa has been a sanctuary of peace in the heart of New York City.
                                Founded with a vision to bring holistic wellness to busy urban professionals, we've grown into
                                one of the most trusted names in luxury spa experiences.</p>
                            <p>Our team of certified therapists combines ancient healing traditions with modern techniques
                                to deliver transformative treatments that nurture your body, mind, and soul.</p>
                        </div>
                        <div className="about-images reveal">
                            <div className="about-image-main">
                                <img src={receptionImg} alt="Serenity Spa Reception" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section" style={{ background: 'var(--color-accent-light)' }}>
                <div className="container">
                    <SectionHeader subtitle="What We Believe" title="Our Core Values" />
                    <div className="grid grid-4">
                        {coreValues.map((v, i) => (
                            <div key={i} className="reveal" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
                                <div style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-md)' }}>{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p style={{ color: 'var(--color-text-light)' }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section">
                <div className="container">
                    <SectionHeader subtitle="Meet Our Team" title="Expert Therapists" />
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
                                    style={{ width: 100, height: 100, borderRadius: '50%', marginBottom: 'var(--space-md)' }}
                                />
                                <h4>{member.name}</h4>
                                <p style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-xs)' }}>{member.role}</p>
                                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)' }}>{member.exp} experience</p>
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
                                <div className="certification-icon"><i className={`fas ${cert.icon}`}></i></div>
                                <span className="certification-text">{cert.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

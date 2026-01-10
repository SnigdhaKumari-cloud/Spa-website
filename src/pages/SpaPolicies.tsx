import { JSX } from 'react';
import { Link } from 'react-router-dom';

interface PolicySection {
    icon: string;
    title: string;
    content: string[];
}

const policies: PolicySection[] = [
    {
        icon: 'fa-clock',
        title: 'Appointment Policies',
        content: [
            'Please arrive 10-15 minutes before your scheduled appointment to allow time for check-in and preparation.',
            'We welcome both walk-ins and appointments. For guaranteed availability, we recommend booking in advance.',
            'All treatments have a specific time schedule. On-time arrival ensures a relaxed, unhurried experience.',
            'If you are running late, please call us immediately. Late arrivals may result in shortened treatment time.'
        ]
    },
    {
        icon: 'fa-calendar-times',
        title: 'Cancellation Policy',
        content: [
            'Please provide at least 24 hours notice if you need to reschedule or cancel your appointment.',
            'Cancellations within 24 hours may result in a $30 cancellation fee.',
            'No-shows will be charged 50% of the scheduled service price.',
            'Package and membership sessions cannot be transferred or refunded for no-shows.',
            'For group bookings of 3 or more, please provide 48 hours notice for cancellations.'
        ]
    },
    {
        icon: 'fa-heart-pulse',
        title: 'Health & Safety Guidelines',
        content: [
            'Please inform us of any health conditions, allergies, or medications before your treatment.',
            'Pregnant guests should consult their physician before booking certain treatments.',
            'Some treatments may not be suitable for those with high blood pressure, heart conditions, or recent surgeries.',
            'If you feel unwell or have a fever, please reschedule your appointment for the safety of all guests and staff.',
            'All our equipment is sanitized between each use, and our spa follows strict hygiene protocols.'
        ]
    },
    {
        icon: 'fa-spa',
        title: 'Treatment Guidelines',
        content: [
            'Communicate openly with your therapist about pressure, temperature, and comfort preferences.',
            'If at any point you feel uncomfortable, please let your therapist know immediately.',
            'For massage treatments, you will be professionally draped throughout the service for your privacy.',
            'We recommend avoiding heavy meals 1-2 hours before body treatments.',
            'Stay hydrated before and after your treatment for optimal results.'
        ]
    },
    {
        icon: 'fa-user-check',
        title: 'Spa Etiquette',
        content: [
            'The spa is a sanctuary of peace. Please speak softly and turn off mobile phones.',
            'Lockers are provided for personal belongings. We recommend leaving valuables at home.',
            'Robes and slippers are provided for treatments requiring them.',
            'Please shower before using pool, sauna, or steam room facilities.',
            'Gratuities are not included in service prices but are greatly appreciated for exceptional service.'
        ]
    },
    {
        icon: 'fa-child',
        title: 'Children & Age Policy',
        content: [
            'Guests must be 18 years or older to access spa facilities.',
            'Guests aged 16-17 may receive treatments with parental consent and supervision.',
            'Facial treatments are available for teens with age-appropriate products.',
            'Children under 16 are not permitted in the spa area to maintain a tranquil environment.'
        ]
    }
];

export default function SpaPolicies(): JSX.Element {
    return (
        <>
            {/* Hero Section */}
            <section style={{ padding: '180px 0 80px', background: 'var(--gradient-warm)', textAlign: 'center' }}>
                <div className="container">
                    <span className="subtitle">Important Information</span>
                    <h1 style={{ marginTop: 'var(--space-sm)' }}>Spa Policies</h1>
                    <p style={{
                        marginTop: 'var(--space-md)',
                        color: 'var(--color-text-light)',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        To ensure the best experience for all our guests, please take a moment to review our spa policies before your visit.
                    </p>
                </div>
            </section>

            {/* Policies Section */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ gap: 'var(--space-2xl)' }}>
                        {policies.map((policy, index) => (
                            <div
                                key={index}
                                className="reveal"
                                style={{
                                    background: 'var(--color-surface)',
                                    borderRadius: 'var(--radius-xl)',
                                    padding: 'var(--space-2xl)',
                                    boxShadow: 'var(--shadow-md)',
                                    transition: 'var(--transition-base)'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-md)',
                                    marginBottom: 'var(--space-lg)'
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'var(--gradient-primary)',
                                        borderRadius: 'var(--radius-lg)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: 'var(--text-xl)'
                                    }}>
                                        <i className={`fas ${policy.icon}`}></i>
                                    </div>
                                    <h3 style={{ margin: 0 }}>{policy.title}</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {policy.content.map((item, i) => (
                                        <li
                                            key={i}
                                            style={{
                                                padding: 'var(--space-sm) 0',
                                                paddingLeft: 'var(--space-lg)',
                                                position: 'relative',
                                                color: 'var(--color-text-light)',
                                                lineHeight: '1.7'
                                            }}
                                        >
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                color: 'var(--color-primary)',
                                                fontWeight: 'bold'
                                            }}>•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section style={{
                padding: 'var(--space-3xl) 0',
                background: 'var(--color-accent-light)',
                textAlign: 'center'
            }}>
                <div className="container reveal">
                    <h2 style={{ marginBottom: 'var(--space-md)' }}>Have Questions?</h2>
                    <p style={{
                        color: 'var(--color-text-light)',
                        maxWidth: '500px',
                        margin: '0 auto var(--space-xl)'
                    }}>
                        If you have any questions about our policies or need special accommodations, please don't hesitate to contact us.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary">
                            <i className="fas fa-envelope"></i> Contact Us
                        </Link>
                        <Link to="/booking" className="btn btn-secondary">
                            <i className="fas fa-calendar-check"></i> Book Now
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

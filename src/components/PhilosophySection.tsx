import { coreValues } from '../data';
import SectionHeader from './SectionHeader';

export default function PhilosophySection() {
    return (
        <section className="section philosophy-section" id="philosophy">
            <div className="container">
                <SectionHeader
                    subtitle="Our Mission"
                    title="The Serenity Philosophy"
                    description="We believe in holistic healing and the power of professional touch to restore balance."
                />

                <div className="values-grid">
                    {coreValues.map((value, i) => (
                        <div key={i} className="value-card reveal">
                            <div className="value-icon">{value.icon}</div>
                            <h3 className="value-title">{value.title}</h3>
                            <p className="value-desc">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

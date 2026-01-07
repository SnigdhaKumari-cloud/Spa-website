import { teamMembers } from '../data';
import SectionHeader from './SectionHeader';

export default function TherapistsSection() {
    return (
        <section className="section therapists-section" id="experts">
            <div className="container">
                <SectionHeader
                    subtitle="Meet Our Experts"
                    title="The Healing Hands"
                    description="Our certified professionals are dedicated to your holistic well-being and renewal."
                />
                <div className="therapists-grid">
                    {teamMembers.map((member, i) => (
                        <div key={i} className="therapist-card reveal">
                            <div className="therapist-image">
                                <img src={member.avatar} alt={member.name} />
                                <div className="therapist-exp">{member.exp} Experience</div>
                            </div>
                            <div className="therapist-info">
                                <h3 className="therapist-name">{member.name}</h3>
                                <div className="therapist-role">{member.role}</div>
                                <p className="therapist-bio">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

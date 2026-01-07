import { locationData } from '../data';
import SectionHeader from './SectionHeader';

export default function LocationSection() {
    return (
        <section className="section location-section" id="location">
            <div className="container">
                <div className="location-grid">
                    <div className="location-info-box reveal">
                        <SectionHeader
                            subtitle="Visit Us"
                            title="Find Your Sanctuary"
                            description="Conveniently located in the heart of the Zen District."
                            align="left"
                        />

                        <div className="contact-details-list">
                            <div className="detail-item">
                                <div className="detail-icon"><i className="fas fa-map-marker-alt"></i></div>
                                <div className="detail-content">
                                    <label>Location</label>
                                    <p>{locationData.address}</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-icon"><i className="fas fa-phone-alt"></i></div>
                                <div className="detail-content">
                                    <label>Contact</label>
                                    <p>{locationData.phone}</p>
                                    <p>{locationData.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="business-hours">
                            <h4>Opening Hours</h4>
                            {locationData.hours.map((h, i) => (
                                <div key={i} className="hour-row">
                                    <span className="days">{h.days}</span>
                                    <span className="time">{h.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="location-map reveal">
                        <div className="map-placeholder">
                            <div className="map-inner">
                                <i className="fas fa-map-marked-alt"></i>
                                <span>Interactive Map Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

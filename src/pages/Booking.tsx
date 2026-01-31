import { useState, JSX } from 'react';
import SectionHeader from '../components/SectionHeader';
import { serviceCategories, spaPackages } from '../data';

type BookingStep = 1 | 2 | 3 | 4 | 5;

interface BookingData {
    category: string;
    service: string;
    package?: string;
    date: string;
    time: string;
    name: string;
    email: string;
    phone: string;
    notes: string;
}

export default function Booking(): JSX.Element {
    const [step, setStep] = useState<BookingStep>(1);
    const [formData, setFormData] = useState<BookingData>({
        category: '',
        service: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        notes: ''
    });

    const nextStep = () => setStep((prev) => (prev + 1) as BookingStep);
    const prevStep = () => setStep((prev) => (prev - 1) as BookingStep);

    const updateFormData = (data: Partial<BookingData>) => {
        setFormData((prev) => ({ ...prev, ...data }));
    };

    const isStepValid = () => {
        switch (step) {
            case 1: return formData.category !== '';
            case 2: return formData.service !== '';
            case 3: return formData.date !== '' && formData.time !== '';
            case 4: return formData.name !== '' && formData.email !== '' && formData.phone !== '';
            default: return true;
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="booking-step-content animate-fade-up">
                        <h3 className="step-title">1. Select Service Category</h3>
                        <div className="booking-options-grid">
                            {Object.entries(serviceCategories).map(([key, cat]) => (
                                <button
                                    key={key}
                                    className={`booking-option-card ${formData.category === key ? 'active' : ''}`}
                                    onClick={() => updateFormData({ category: key, service: '', package: undefined })}
                                >
                                    <div className="option-icon"><ion-icon name={cat.icon}></ion-icon></div>
                                    <div className="option-name">{cat.title}</div>
                                </button>
                            ))}
                            <button
                                className={`booking-option-card ${formData.category === 'package' ? 'active' : ''}`}
                                onClick={() => updateFormData({ category: 'package', service: '', package: '' })}
                            >
                                <div className="option-icon"><ion-icon name="gift-outline"></ion-icon></div>
                                <div className="option-name">Spa Packages</div>
                            </button>
                        </div>
                    </div>
                );
            case 2:
                const services = formData.category === 'package'
                    ? spaPackages.map(p => ({ name: p.name, price: p.price, duration: '90-120 min' }))
                    : serviceCategories[formData.category]?.services || [];

                return (
                    <div className="booking-step-content animate-fade-up">
                        <h3 className="step-title">2. Choose Your Treatment</h3>
                        <div className="booking-services-list">
                            {services.map((s, i) => (
                                <button
                                    key={i}
                                    className={`booking-service-item ${formData.service === s.name ? 'active' : ''}`}
                                    onClick={() => updateFormData({ service: s.name })}
                                >
                                    <div className="service-info">
                                        <div className="service-name">{s.name}</div>
                                        <div className="service-duration"><i className="far fa-clock"></i> {s.duration}</div>
                                    </div>
                                    <div className="service-price">${s.price}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 3:
                const timeSlots = ['09:00 AM', '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];
                return (
                    <div className="booking-step-content animate-fade-up">
                        <h3 className="step-title">3. Pick Date & Time</h3>
                        <div className="booking-datetime-container">
                            <div className="date-picker-placeholder">
                                <label>Selected Date</label>
                                <input
                                    type="date"
                                    className="form-input"
                                    min={new Date().toISOString().split('T')[0]}
                                    value={formData.date}
                                    onChange={(e) => updateFormData({ date: e.target.value })}
                                />
                            </div>
                            <div className="time-slots-container">
                                <label>Available Slots</label>
                                <div className="time-slots-grid">
                                    {timeSlots.map((slot) => (
                                        <button
                                            key={slot}
                                            className={`time-slot-btn ${formData.time === slot ? 'active' : ''}`}
                                            onClick={() => updateFormData({ time: slot })}
                                        >
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="booking-step-content animate-fade-up">
                        <h3 className="step-title">4. Contact Details</h3>
                        <div className="booking-form-grid">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Jane Doe"
                                    value={formData.name}
                                    onChange={(e) => updateFormData({ name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder="jane@example.com"
                                    value={formData.email}
                                    onChange={(e) => updateFormData({ email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-input"
                                    placeholder="(555) 123-4567"
                                    value={formData.phone}
                                    onChange={(e) => updateFormData({ phone: e.target.value })}
                                />
                            </div>
                            <div className="form-group full-width">
                                <label>Special Instructions (Optional)</label>
                                <textarea
                                    className="form-input"
                                    rows={4}
                                    placeholder="Any allergies or preferences..."
                                    value={formData.notes}
                                    onChange={(e) => updateFormData({ notes: e.target.value })}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="booking-step-content animate-fade-up text-center">
                        <div className="confirmation-icon"><i className="fas fa-check-circle"></i></div>
                        <h3 className="step-title">Booking Confirmed!</h3>
                        <p className="confirmation-text">Thank you, {formData.name}. Your appointment for {formData.service} has been successfully scheduled.</p>

                        <div className="confirmation-summary">
                            <div className="summary-item">
                                <span>Date & Time:</span>
                                <strong>{formData.date} at {formData.time}</strong>
                            </div>
                            <div className="summary-item">
                                <span>Service:</span>
                                <strong>{formData.service}</strong>
                            </div>
                        </div>

                        <button className="btn btn-primary mt-xl" onClick={() => window.location.href = '/'}>
                            Return to Home
                        </button>
                    </div>
                );
        }
    };

    return (
        <section className="section booking-page">
            <div className="container">
                <SectionHeader
                    subtitle="Smooth & Easy"
                    title="Book Your Sanctuary"
                    description="Follow our simple steps to schedule your premium spa experience."
                />

                <div className="booking-flow-container shadow-xl">
                    {/* Progress Bar */}
                    {step < 5 && (
                        <div className="booking-progress">
                            <div
                                className="progress-fill"
                                style={{ width: `${((step - 1) / 3) * 100}%` }}
                            ></div>
                            <div className="progress-steps">
                                {[1, 2, 3, 4].map((s) => (
                                    <div
                                        key={s}
                                        className={`progress-step-node ${s <= step ? 'active' : ''}`}
                                    >
                                        {s}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {renderStep()}

                    {/* Navigation Buttons */}
                    {step < 5 && (
                        <div className="booking-nav-buttons mt-2xl">
                            {step > 1 && (
                                <button className="btn btn-outline" onClick={prevStep}>
                                    <i className="fas fa-arrow-left"></i> Back
                                </button>
                            )}
                            <button
                                className="btn btn-primary ms-auto"
                                onClick={nextStep}
                                disabled={!isStepValid()}
                            >
                                {step === 4 ? 'Confirm Booking' : 'Next Step'} <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

import { JSX, useState } from 'react';
import { spaPackages } from '../data';
import sageMarbleBg from '../assets/images/sage_marble_giftcard.png';

interface GiftCardAmount {
    value: number;
    label: string;
    popular?: boolean;
}

const presetAmounts: GiftCardAmount[] = [
    { value: 50, label: '$50' },
    { value: 100, label: '$100', popular: true },
    { value: 150, label: '$150' },
    { value: 200, label: '$200', popular: true },
    { value: 300, label: '$300' },
    { value: 500, label: '$500' },
];

const giftCardFeatures = [
    { icon: 'fa-infinity', title: 'Never Expires', desc: 'Use it whenever you\'re ready to relax' },
    { icon: 'fa-gift', title: 'Instant Delivery', desc: 'Digital cards delivered immediately via email' },
    { icon: 'fa-palette', title: 'Personalized', desc: 'Add a custom message for that special someone' },
    { icon: 'fa-spa', title: 'Any Service', desc: 'Redeemable for all spa treatments and packages' },
];

type CardType = 'amount' | 'package';
type DeliveryType = 'digital' | 'physical';

export default function GiftCards(): JSX.Element {
    const [cardType, setCardType] = useState<CardType>('amount');
    const [selectedAmount, setSelectedAmount] = useState<number>(100);
    const [customAmount, setCustomAmount] = useState<string>('');
    const [selectedPackage, setSelectedPackage] = useState<string>('Serenity');
    const [deliveryType, setDeliveryType] = useState<DeliveryType>('digital');
    const [step, setStep] = useState<number>(1);

    // Form state
    const [recipientName, setRecipientName] = useState<string>('');
    const [recipientEmail, setRecipientEmail] = useState<string>('');
    const [senderName, setSenderName] = useState<string>('');
    const [senderEmail, setSenderEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const getFinalAmount = (): number => {
        if (cardType === 'package') {
            const pkg = spaPackages.find(p => p.name === selectedPackage);
            return pkg?.price || 0;
        }
        return customAmount ? parseInt(customAmount) : selectedAmount;
    };

    const handleAmountSelect = (amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (value: string) => {
        const numValue = value.replace(/[^0-9]/g, '');
        setCustomAmount(numValue);
        if (numValue) {
            setSelectedAmount(0);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would integrate with a payment gateway
        alert(`Thank you! Your $${getFinalAmount()} gift card will be sent to ${recipientEmail || 'the recipient'}.`);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="gift-cards-hero">
                <div className="container">
                    <span className="subtitle">The Perfect Present</span>
                    <h1 style={{ marginTop: 'var(--space-sm)' }}>Gift Cards</h1>
                    <p style={{
                        marginTop: 'var(--space-md)',
                        color: 'var(--color-text-light)',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontSize: 'var(--text-lg)'
                    }}>
                        Give the gift of relaxation and rejuvenation. Perfect for birthdays, holidays, or just because.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: 'var(--space-3xl) 0', background: 'var(--color-surface)' }}>
                <div className="container">
                    <div className="grid grid-4">
                        {giftCardFeatures.map((feature, i) => (
                            <div key={i} className="reveal" style={{ textAlign: 'center', padding: 'var(--space-lg)' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'var(--gradient-primary)',
                                    borderRadius: 'var(--radius-lg)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto var(--space-md)',
                                    color: 'white',
                                    fontSize: 'var(--text-xl)'
                                }}>
                                    <i className={`fas ${feature.icon}`}></i>
                                </div>
                                <h4 style={{ marginBottom: 'var(--space-xs)' }}>{feature.title}</h4>
                                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gift Card Builder */}
            <section className="section" style={{ background: 'var(--color-background)' }}>
                <div className="container">
                    <div className="gift-card-builder">
                        {/* Progress Steps */}
                        <div className="gift-card-steps reveal">
                            <div className={`step ${step >= 1 ? 'active' : ''}`}>
                                <div className="step-number">1</div>
                                <span>Choose Amount</span>
                            </div>
                            <div className="step-line"></div>
                            <div className={`step ${step >= 2 ? 'active' : ''}`}>
                                <div className="step-number">2</div>
                                <span>Personalize</span>
                            </div>
                            <div className="step-line"></div>
                            <div className={`step ${step >= 3 ? 'active' : ''}`}>
                                <div className="step-number">3</div>
                                <span>Complete</span>
                            </div>
                        </div>

                        <div className="gift-card-content">
                            {/* Left Side - Options */}
                            <div className="gift-card-options reveal">
                                {step === 1 && (
                                    <>
                                        {/* Card Type Toggle */}
                                        <div className="card-type-toggle">
                                            <button
                                                className={`toggle-btn ${cardType === 'amount' ? 'active' : ''}`}
                                                onClick={() => setCardType('amount')}
                                            >
                                                <i className="fas fa-dollar-sign"></i> Dollar Amount
                                            </button>
                                            <button
                                                className={`toggle-btn ${cardType === 'package' ? 'active' : ''}`}
                                                onClick={() => setCardType('package')}
                                            >
                                                <i className="fas fa-box-gift"></i> Spa Package
                                            </button>
                                        </div>

                                        {cardType === 'amount' ? (
                                            <>
                                                <h3 style={{ marginBottom: 'var(--space-lg)' }}>Select Amount</h3>
                                                <div className="amount-grid">
                                                    {presetAmounts.map((amt) => (
                                                        <button
                                                            key={amt.value}
                                                            className={`amount-btn ${selectedAmount === amt.value && !customAmount ? 'active' : ''}`}
                                                            onClick={() => handleAmountSelect(amt.value)}
                                                        >
                                                            {amt.label}
                                                            {amt.popular && <span className="popular-badge">Popular</span>}
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="custom-amount">
                                                    <label>Or enter a custom amount</label>
                                                    <div className="custom-amount-input">
                                                        <span className="currency">$</span>
                                                        <input
                                                            type="text"
                                                            placeholder="25 - 1000"
                                                            value={customAmount}
                                                            onChange={(e) => handleCustomAmountChange(e.target.value)}
                                                            maxLength={4}
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <h3 style={{ marginBottom: 'var(--space-lg)' }}>Select a Package</h3>
                                                <div className="package-options">
                                                    {spaPackages.map((pkg) => (
                                                        <div
                                                            key={pkg.name}
                                                            className={`package-option ${selectedPackage === pkg.name ? 'active' : ''}`}
                                                            onClick={() => setSelectedPackage(pkg.name)}
                                                        >
                                                            <div className="package-icon">{pkg.icon}</div>
                                                            <div className="package-info">
                                                                <h4>{pkg.name} Package</h4>
                                                                <p>{pkg.tagline}</p>
                                                            </div>
                                                            <div className="package-price">${pkg.price}</div>
                                                            {pkg.featured && <span className="featured-tag">Best Value</span>}
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}

                                        <button
                                            className="btn btn-primary btn-lg"
                                            style={{ width: '100%', marginTop: 'var(--space-xl)' }}
                                            onClick={() => setStep(2)}
                                        >
                                            Continue to Personalize <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </>
                                )}

                                {step === 2 && (
                                    <>
                                        <h3 style={{ marginBottom: 'var(--space-lg)' }}>Personalize Your Gift</h3>

                                        <div className="delivery-toggle">
                                            <button
                                                className={`delivery-btn ${deliveryType === 'digital' ? 'active' : ''}`}
                                                onClick={() => setDeliveryType('digital')}
                                            >
                                                <i className="fas fa-envelope"></i>
                                                <div>
                                                    <strong>Email Delivery</strong>
                                                    <span>Instant digital delivery</span>
                                                </div>
                                            </button>
                                            <button
                                                className={`delivery-btn ${deliveryType === 'physical' ? 'active' : ''}`}
                                                onClick={() => setDeliveryType('physical')}
                                            >
                                                <i className="fas fa-gift"></i>
                                                <div>
                                                    <strong>Physical Card</strong>
                                                    <span>Mailed in 3-5 days</span>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="form-group">
                                            <label>Recipient's Name *</label>
                                            <input
                                                type="text"
                                                placeholder="Enter recipient's name"
                                                value={recipientName}
                                                onChange={(e) => setRecipientName(e.target.value)}
                                                required
                                            />
                                        </div>

                                        {deliveryType === 'digital' && (
                                            <div className="form-group">
                                                <label>Recipient's Email *</label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter recipient's email"
                                                    value={recipientEmail}
                                                    onChange={(e) => setRecipientEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        )}

                                        <div className="form-group">
                                            <label>Personal Message (Optional)</label>
                                            <textarea
                                                placeholder="Add a personal touch to your gift..."
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                rows={3}
                                                maxLength={200}
                                            />
                                            <span className="char-count">{message.length}/200</span>
                                        </div>

                                        <div className="step-buttons">
                                            <button
                                                className="btn btn-outline"
                                                onClick={() => setStep(1)}
                                            >
                                                <i className="fas fa-arrow-left"></i> Back
                                            </button>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => setStep(3)}
                                                disabled={!recipientName || (deliveryType === 'digital' && !recipientEmail)}
                                            >
                                                Continue <i className="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </>
                                )}

                                {step === 3 && (
                                    <>
                                        <h3 style={{ marginBottom: 'var(--space-lg)' }}>Your Details</h3>

                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label>Your Name *</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    value={senderName}
                                                    onChange={(e) => setSenderName(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Your Email *</label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    value={senderEmail}
                                                    onChange={(e) => setSenderEmail(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="order-summary">
                                                <h4>Order Summary</h4>
                                                <div className="summary-row">
                                                    <span>Gift Card Amount</span>
                                                    <span>${getFinalAmount()}</span>
                                                </div>
                                                <div className="summary-row">
                                                    <span>Delivery Method</span>
                                                    <span>{deliveryType === 'digital' ? 'Email' : 'Physical Card'}</span>
                                                </div>
                                                {deliveryType === 'physical' && (
                                                    <div className="summary-row">
                                                        <span>Shipping</span>
                                                        <span>Free</span>
                                                    </div>
                                                )}
                                                <div className="summary-row total">
                                                    <span>Total</span>
                                                    <span>${getFinalAmount()}</span>
                                                </div>
                                            </div>

                                            <div className="step-buttons">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline"
                                                    onClick={() => setStep(2)}
                                                >
                                                    <i className="fas fa-arrow-left"></i> Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="btn btn-secondary"
                                                    disabled={!senderName || !senderEmail}
                                                >
                                                    <i className="fas fa-lock"></i> Purchase Gift Card
                                                </button>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </div>

                            {/* Right Side - Card Preview */}
                            <div className="gift-card-preview reveal">
                                <div className="preview-label">Card Preview</div>
                                <div className="gift-card" style={{
                                    backgroundImage: `url(${sageMarbleBg})`,
                                    backgroundSize: '300%', // Optimized zoom to hide all baked-in text
                                    backgroundPosition: '85% 15%', // Optimized focus on clean botanical corner
                                    border: '1px solid rgba(26, 95, 74, 0.1)'
                                }}>
                                    <div className="gift-card-inner" style={{ color: '#1a5f4a', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 'var(--space-xl)' }}>
                                        <div className="gift-card-amount" style={{
                                            position: 'relative',
                                            color: '#1a5f4a',
                                            textShadow: '0 2px 4px rgba(255,255,255,0.5)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            margin: 'var(--space-md) 0'
                                        }}>
                                            <span style={{ fontSize: '0.5em', marginTop: '-0.5em', color: '#c5a059' }}>$</span>
                                            {getFinalAmount()}
                                        </div>
                                        {cardType === 'package' && (
                                            <div className="gift-card-package" style={{ color: '#c5a059', fontWeight: '600', marginBottom: 'var(--space-sm)' }}>
                                                {selectedPackage} Package
                                            </div>
                                        )}
                                        <div className="gift-card-recipient" style={{ opacity: 1, fontWeight: '500', fontSize: 'var(--text-md)', textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}>
                                            {recipientName ? `For: ${recipientName}` : 'For: Your Special Someone'}
                                        </div>
                                        {message && (
                                            <div className="gift-card-message" style={{ color: '#1a5f4a', opacity: 0.9, fontSize: 'var(--text-sm)', background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)', padding: '6px 12px', borderRadius: '8px', marginTop: '8px', maxWidth: '80%' }}>
                                                "{message}"
                                            </div>
                                        )}
                                        <div className="gift-card-footer" style={{
                                            position: 'absolute',
                                            bottom: 'var(--space-xl)',
                                            left: 'var(--space-2xl)',
                                            right: 'var(--space-2xl)',
                                            borderTop: '1px solid rgba(26, 95, 74, 0.2)',
                                            paddingTop: 'var(--space-sm)',
                                            opacity: 1,
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>
                                            <span style={{ color: '#1a5f4a', fontWeight: '500' }}>Gift Card</span>
                                            <span style={{ color: '#c5a059', fontWeight: '600' }}>Never Expires</span>
                                        </div>
                                    </div>
                                    {/* Remove or Hide Pattern for Marble Background */}
                                    {/* <div className="gift-card-pattern"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: 'var(--space-4xl) 0',
                background: 'var(--gradient-primary)',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container reveal">
                    <h2 style={{ color: 'white', marginBottom: 'var(--space-md)' }}>
                        Have Questions?
                    </h2>
                    <p style={{
                        opacity: 0.9,
                        maxWidth: '500px',
                        margin: '0 auto var(--space-xl)'
                    }}>
                        Our team is here to help with gift card purchases, redemptions, or any other inquiries.
                    </p>
                    <a href="/contact" className="btn btn-white btn-lg">
                        <i className="fas fa-phone"></i> Contact Us
                    </a>
                </div>
            </section>
        </>
    );
}

import { useState, useEffect, JSX } from 'react';
import { testimonials } from '../data';

export default function TestimonialsCarousel(): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="testimonial-carousel-container reveal">
            <div className="testimonial-decoration left">"</div>
            <div className="testimonial-decoration right">"</div>

            <div className="testimonial-slides">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className={`testimonial-slide-single ${i === activeIndex ? 'active' : ''}`}
                    >
                        <div className="testimonial-rating-stars">
                            {[...Array(5)].map((_, idx) => (
                                <i key={idx} className="fas fa-star"></i>
                            ))}
                        </div>

                        <blockquote className="testimonial-quote">
                            "{t.text}"
                        </blockquote>

                        <div className="testimonial-author-box">
                            <img src={t.avatar} alt={t.name} className="testimonial-author-avatar" />
                            <div className="testimonial-author-info">
                                <h4 className="testimonial-author-name">{t.name}</h4>
                                <span className="testimonial-author-role">{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="testimonial-dots">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        className={`testimonial-dot ${i === activeIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

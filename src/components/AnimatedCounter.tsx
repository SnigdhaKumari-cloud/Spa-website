import { useState, useEffect, useRef, JSX } from 'react';

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    label: string;
    duration?: number;
}

export default function AnimatedCounter({
    value,
    suffix = '',
    label,
    duration = 2000
}: AnimatedCounterProps): JSX.Element {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateValue(0, value, duration);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [value, duration, hasAnimated]);

    const animateValue = (start: number, end: number, duration: number) => {
        const startTime = performance.now();

        const easeOutQuart = (t: number): number => {
            return 1 - Math.pow(1 - t, 4);
        };

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);

            const currentValue = Math.floor(start + (end - start) * easedProgress);
            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    // Format the display value (handle K+ for thousands)
    const formatValue = (num: number): string => {
        if (suffix.includes('K')) {
            return `${(num / 1000).toFixed(num >= 1000 ? 0 : 1)}`;
        }
        return num.toString();
    };

    const displayValue = suffix.includes('K') ? formatValue(count * 1000) : count.toString();

    return (
        <div ref={counterRef} className="animated-counter">
            <div className="counter-value">
                {displayValue}{suffix}
            </div>
            <div className="counter-label">{label}</div>
        </div>
    );
}

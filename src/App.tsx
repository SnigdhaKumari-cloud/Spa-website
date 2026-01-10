import { JSX, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import SpaPolicies from './pages/SpaPolicies';
import './styles/main.css';
import './styles/components.css';

// Component to handle scroll reveal animations
function ScrollReveal(): null {
    const location = useLocation();

    useEffect(() => {
        // Set up IntersectionObserver for reveal animations
        const observerOptions: IntersectionObserverInit = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        // Observe all reveal elements
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        // Scroll to top on route change
        window.scrollTo(0, 0);

        return () => {
            revealElements.forEach(el => observer.unobserve(el));
        };
    }, [location]);

    return null;
}

function App(): JSX.Element {
    return (
        <Router>
            <ScrollReveal />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceType" element={<ServiceDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/spa-policies" element={<SpaPolicies />} />
            </Routes>
            <Footer />
            <LiveChat />
        </Router>
    );
}

export default App;

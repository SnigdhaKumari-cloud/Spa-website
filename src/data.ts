// ================================
// SERENITY SPA - Centralized Data
// ================================

import {
    massageImg,
    facialImg,
    bodyImg,
    nailImg
} from './assets/images';

import type {
    ServiceCategories,
    HomeService,
    Stat,
    Testimonial,
    CoreValue,
    TeamMember,
    Certification,
    FAQ,
    ServiceOption,
    SpaPackage
} from './types';

// ===== SERVICE DATA =====
export const serviceCategories: ServiceCategories = {
    massage: {
        title: 'Massage Therapy',
        subtitle: 'Healing Touch',
        description: 'Experience therapeutic massage with our certified therapists using European techniques.',
        image: massageImg,
        icon: 'fa-hands',
        services: [
            { name: 'Swedish Massage', desc: 'Classic European technique to relieve stress', price: 89, duration: '60 min' },
            { name: 'Deep Tissue Massage', desc: 'Targets deep muscle tension with forearms and elbows', price: 109, duration: '60 min' },
            { name: 'Hot Stone Massage', desc: 'Heated basalt stones penetrate muscles and balance nervous system', price: 129, duration: '75 min', featured: true },
            { name: 'Couples Massage', desc: 'Side-by-side relaxation with dual therapists', price: 249, duration: '60 min' },
            { name: 'Sports Massage', desc: 'Deep pressure and stretching for athletic recovery', price: 119, duration: '60 min' },
            { name: 'Combination Massage', desc: 'Blended techniques for relaxation and rejuvenation', price: 99, duration: '60 min' },
            { name: 'Expectant Mothers', desc: 'Prenatal massage designed for mothers-to-be', price: 109, duration: '60 min' },
            { name: 'Four Hands Massage', desc: 'Two therapists work simultaneously on different body parts', price: 199, duration: '60 min' },
            { name: 'Reflexology', desc: 'Pressure applied to reflex points to release blockages', price: 69, duration: '30 min' },
            { name: 'Scalp Massage', desc: 'Increases blood circulation for hair health', price: 49, duration: '30 min' },
        ]
    },
    facial: {
        title: 'Facial Treatments',
        subtitle: 'Radiant Skin',
        description: 'Advanced skincare treatments customized for your exact complexion.',
        image: facialImg,
        icon: 'fa-face-smile',
        services: [
            { name: 'Classic Facial', desc: 'Deep cleansing and hydration', price: 120, duration: '60 min' },
            { name: 'Anti-Aging Facial', desc: 'Vitamins and minerals stimulate collagen production', price: 180, duration: '75 min', featured: true },
            { name: 'Hydrating Facial', desc: 'Intense moisture for dry skin', price: 150, duration: '60 min' },
            { name: 'Brightening Facial', desc: 'Even skin tone with vitamin C', price: 160, duration: '60 min' },
            { name: 'Acne Clearing Facial', desc: 'Targets blackheads, whiteheads and inflamed acne', price: 140, duration: '60 min' },
            { name: 'European Facial', desc: 'Customized deep cleansing with extractions and massage', price: 165, duration: '75 min' },
            { name: 'Mini Facial', desc: 'Quick cleansing, mask and moisturizer', price: 75, duration: '30 min' },
            { name: 'Back Facial', desc: 'Clarifying treatment for breakout-prone back', price: 130, duration: '60 min' },
            { name: 'Gentleman\'s Facial', desc: 'Designed specifically for men\'s skincare needs', price: 135, duration: '60 min' },
            { name: 'Ultrasonic Facial', desc: 'Sound wave technology for firmer, younger-looking skin', price: 195, duration: '75 min' },
            { name: 'Chemical Peel', desc: 'Exfoliates skin for smoother, less wrinkled surface', price: 175, duration: '45 min' },
            { name: 'Microneedling', desc: 'Collagen induction therapy for acne scars', price: 250, duration: '60 min' },
        ]
    },
    body: {
        title: 'Body Treatments',
        subtitle: 'Total Renewal',
        description: 'Luxurious treatments for complete body wellness and detoxification.',
        image: bodyImg,
        icon: 'fa-leaf',
        services: [
            { name: 'Exfoliating Body Polish', desc: 'Sea salts sweep away dead cells for soft skin', price: 150, duration: '60 min' },
            { name: 'Detox Body Wrap', desc: 'Seaweed mud promotes detoxification and improves skin texture', price: 180, duration: '75 min', featured: true },
            { name: 'Hydrating Wrap', desc: 'Deep moisture restoration for dry skin', price: 170, duration: '75 min' },
            { name: 'Body Contouring', desc: 'Reduces cellulite and firms skin', price: 200, duration: '90 min' },
            { name: 'Aromatherapy Wrap', desc: 'Essential oils heal and regulate mood', price: 175, duration: '75 min' },
            { name: 'CBD Treatment', desc: 'Hemp-derived CBD relieves stress and muscle tension', price: 195, duration: '75 min' },
            { name: 'Steam Room Session', desc: 'Overall body detoxification experience', price: 45, duration: '30 min' },
            { name: 'Paraffin Body Treatment', desc: 'Warming wax soothes and softens skin', price: 85, duration: '45 min' },
        ]
    },
    nails: {
        title: 'Nail Services',
        subtitle: 'Beautiful Nails',
        description: 'Premium manicures and pedicures for perfectly polished hands and feet.',
        image: nailImg,
        icon: 'fa-hand-sparkles',
        services: [
            { name: 'Classic Manicure', desc: 'Nail shaping, cuticle care, polish', price: 45, duration: '30 min' },
            { name: 'Gel Manicure', desc: 'Long-lasting chip-free finish', price: 65, duration: '45 min', featured: true },
            { name: 'Spa Manicure', desc: 'Deluxe with exfoliation and mask', price: 75, duration: '60 min' },
            { name: 'No-Chip Manicure', desc: 'Extra durable polish that lasts weeks', price: 70, duration: '45 min' },
            { name: 'Classic Pedicure', desc: 'Complete foot care and polish', price: 55, duration: '45 min' },
            { name: 'Gel Pedicure', desc: 'Long-lasting for beach-ready feet', price: 75, duration: '60 min' },
            { name: 'Luxury Spa Pedicure', desc: 'Hot stone and paraffin wax treatment', price: 95, duration: '75 min' },
            { name: 'Mani-Pedi Combo', desc: 'Complete hand and foot treatment package', price: 95, duration: '75 min' },
            { name: 'French Tip', desc: 'Classic French manicure style', price: 55, duration: '45 min' },
            { name: 'Paraffin Treatment', desc: 'Hydrating wax treatment for hands or feet', price: 25, duration: '15 min' },
            { name: 'Kid\'s Mani-Pedi', desc: 'Fun nail care for little ones', price: 45, duration: '45 min' },
            { name: 'Polish Change', desc: 'Quick color refresh', price: 20, duration: '15 min' },
        ]
    },
    waxing: {
        title: 'Waxing',
        subtitle: 'Smooth Skin',
        description: 'Professional hair removal services for silky smooth skin.',
        image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80',
        icon: 'fa-spa',
        services: [
            { name: 'Eyebrow Wax', desc: 'Shape and define your brows', price: 20, duration: '15 min' },
            { name: 'Upper Lip', desc: 'Gentle facial hair removal', price: 15, duration: '10 min' },
            { name: 'Full Face Wax', desc: 'Complete facial hair removal', price: 55, duration: '30 min', featured: true },
            { name: 'Underarms', desc: 'Quick and smooth underarm wax', price: 25, duration: '15 min' },
            { name: 'Half Arm', desc: 'Forearm hair removal', price: 35, duration: '20 min' },
            { name: 'Full Arm', desc: 'Complete arm waxing', price: 55, duration: '30 min' },
            { name: 'Half Leg', desc: 'Lower leg waxing', price: 45, duration: '25 min' },
            { name: 'Full Leg', desc: 'Complete leg hair removal', price: 75, duration: '45 min' },
            { name: 'Bikini Wax', desc: 'Classic bikini line cleanup', price: 45, duration: '20 min' },
            { name: 'Brazilian Wax', desc: 'Full bikini area removal', price: 75, duration: '30 min' },
            { name: 'Full Back Wax', desc: 'Complete back hair removal', price: 65, duration: '35 min' },
            { name: 'Chest Wax', desc: 'Complete chest hair removal', price: 55, duration: '30 min' },
        ]
    },
    tinting: {
        title: 'Tinting & Lashes',
        subtitle: 'Eye Enhancement',
        description: 'Professional brow and lash services for stunning eyes.',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
        icon: 'fa-eye',
        services: [
            { name: 'Eyebrow Tint', desc: 'Define and darken your brows', price: 25, duration: '20 min' },
            { name: 'Eyelash Tint', desc: 'Darken lashes for a mascara-free look', price: 30, duration: '25 min' },
            { name: 'Lash Lift', desc: 'Natural lash curl that lasts weeks', price: 85, duration: '45 min', featured: true },
            { name: 'Brow Lamination', desc: 'Sleek, brushed-up brow look', price: 75, duration: '45 min' },
            { name: 'Lash & Brow Combo', desc: 'Both tinting services together', price: 50, duration: '40 min' },
            { name: 'Lash Extensions - Classic', desc: 'Natural-looking individual lash extensions', price: 175, duration: '90 min' },
            { name: 'Lash Extensions - Volume', desc: 'Fuller, dramatic lash look', price: 225, duration: '120 min' },
            { name: 'Lash Fill', desc: 'Maintenance for lash extensions', price: 85, duration: '45 min' },
        ]
    },
    spraytan: {
        title: 'Spray Tan',
        subtitle: 'Sun-Kissed Glow',
        description: 'Professional airbrush spray tanning for a natural, healthy glow.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
        icon: 'fa-sun',
        services: [
            { name: 'Original Spray Tan', desc: 'Rose-brown natural-looking tan, 10-12 hour setting', price: 45, duration: '30 min' },
            { name: 'Rapid Spray Tan', desc: 'Mocha and honey tones, 1-4 hour quick set', price: 55, duration: '30 min', featured: true },
            { name: 'Express Tan', desc: 'Quick touch-up for special events', price: 35, duration: '20 min' },
            { name: 'Competition Tan', desc: 'Dark, stage-ready tan for competitions', price: 85, duration: '45 min' },
            { name: 'Organic Serum Add-On', desc: 'Acai, coconut, lavender or green tea boost', price: 15, duration: '5 min' },
            { name: 'Tan Extender Treatment', desc: 'Hydrating treatment to extend tan life', price: 25, duration: '15 min' },
        ]
    }
};

// ===== HOME PAGE DATA =====
export const homeServices: HomeService[] = Object.entries(serviceCategories).map(([key, cat]) => ({
    title: cat.title,
    desc: cat.description,
    price: Math.min(...cat.services.map(s => s.price)),
    img: cat.image,
    link: `/services/${key}`,
    icon: cat.icon
}));

export const stats: Stat[] = [
    { num: '15+', label: 'Years Experience' },
    { num: '50+', label: 'Expert Therapists' },
    { num: '10K+', label: 'Happy Clients' },
    { num: '4.9', label: 'Rating (Google)' },
];

export const testimonials: Testimonial[] = [
    {
        name: 'Sarah Johnson',
        role: 'Marketing Executive',
        text: 'An absolutely divine experience! The hot stone massage melted away all my stress.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        name: 'Michael Chen',
        role: 'Business Owner',
        text: "This is hands down the best spa I've ever visited. The facial treatment has transformed my skin.",
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Interior Designer',
        text: 'A true sanctuary in the city! The staff remembers our preferences every time.',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
];

export const mediaFeatures: string[] = ['Vogue', 'Elle', 'Today Show', 'NY Times', 'Forbes'];

// ===== ABOUT PAGE DATA =====
export const coreValues: CoreValue[] = [
    { icon: '🌿', title: 'Natural', desc: 'Organic, eco-friendly products' },
    { icon: '💆', title: 'Expertise', desc: 'Certified, experienced therapists' },
    { icon: '✨', title: 'Excellence', desc: 'Exceptional service always' },
    { icon: '💕', title: 'Care', desc: 'Your wellness is our priority' },
];

export const teamMembers: TeamMember[] = [
    { name: 'Sarah Williams', role: 'Lead Massage Therapist', exp: '8 years', avatar: 'https://randomuser.me/api/portraits/women/45.jpg', bio: 'Specializing in deep tissue and hot stone therapy for chronic pain relief.' },
    { name: 'Michael Chen', role: 'Senior Esthetician', exp: '10 years', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', bio: 'Expert in advanced anti-aging treatments and personalized skincare routines.' },
    { name: 'Emily Rodriguez', role: 'Nail Artist', exp: '6 years', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', bio: 'Creative specialist in luxury nail art and therapeutic hand/foot care.' },
    { name: 'David Kim', role: 'Body Treatment Specialist', exp: '7 years', avatar: 'https://randomuser.me/api/portraits/men/75.jpg', bio: 'Focused on detoxifying wraps and holistic body renewal treatments.' },
];

export const certifications: Certification[] = [
    { icon: 'fa-user-md', text: 'Licensed Estheticians' },
    { icon: 'fa-certificate', text: 'Board Certified LMTs' },
    { icon: 'fa-shield-alt', text: 'Fully Insured' },
    { icon: 'fa-leaf', text: 'Eco-Certified Products' },
    { icon: 'fa-award', text: 'ISPA Member' },
];

// ===== CONTACT PAGE DATA =====
export const faqData: FAQ[] = [
    { q: 'What should I wear during my visit?', a: 'We provide soft robes and comfortable slippers upon arrival. For most treatments, you will be professionally draped to ensure your privacy and comfort. Choose whatever makes you feel most relaxed.' },
    { q: 'How early should I arrive for my appointment?', a: 'We recommend arriving 15 to 20 minutes before your scheduled treatment. This allows you to check in, complete any necessary intake forms, and enjoy a complimentary herbal tea in our relaxation lounge.' },
    { q: 'What is your cancellation and rescheduling policy?', a: 'As we reserve time specifically for you, we require a 24-hour notice for cancellations or rescheduling. Cancellations with less than 24 hours notice may be subject to a 50% service charge.' },
    { q: 'Do you offer group bookings or spa parties?', a: 'Absolutely! We love hosting bridal showers, birthdays, and corporate retreats. Please contact our events coordinator at least 4 weeks in advance for groups of 4 or more.' },
    { q: 'Are gift cards available for purchase?', a: 'Yes, we offer both physical and digital gift cards. They can be purchased for specific treatments or for a monetary amount, and they never expire.' },
];

export const serviceOptions: ServiceOption[] = [
    { value: '', label: 'Select a service' },
    { value: 'massage', label: 'Massage Therapy' },
    { value: 'facial', label: 'Facial Treatments' },
    { value: 'body', label: 'Body Treatments' },
    { value: 'nails', label: 'Nail Services' },
    { value: 'waxing', label: 'Waxing' },
    { value: 'tinting', label: 'Tinting & Lashes' },
    { value: 'spraytan', label: 'Spray Tan' },
    { value: 'package', label: 'Spa Package' },
];

export const spaPackages: SpaPackage[] = [
    {
        name: 'Bliss',
        tagline: 'Perfect introduction to spa wellness',
        price: 149,
        icon: '🌸',
        featured: false,
        features: [
            '60-min Swedish Massage',
            'Express Facial Treatment',
            'Aromatherapy Session',
            'Complimentary Refreshments'
        ]
    },
    {
        name: 'Serenity',
        tagline: 'Complete mind & body experience',
        price: 279,
        icon: '✨',
        featured: true,
        features: [
            '90-min Hot Stone Massage',
            'Premium Facial Treatment',
            'Body Scrub & Wrap',
            'Manicure & Pedicure'
        ]
    },
    {
        name: 'Nirvana',
        tagline: 'Ultimate luxury escape (Half Day)',
        price: 449,
        icon: '👑',
        featured: false,
        features: [
            '120-min Signature Massage',
            'Anti-Aging Facial',
            'Full Body Treatment',
            'Gel Manicure & Pedicure'
        ]
    }
];

export const megaMenuData = {
    services: [
        {
            title: 'Massage',
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
            link: '/services/massage',
            items: ['Swedish Massage', 'Deep Tissue', 'Hot Stone', 'Four Hands']
        },
        {
            title: 'Facials',
            image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
            link: '/services/facial',
            items: ['European Facial', 'Anti-Aging', 'Microneedling', 'Chemical Peel']
        },
        {
            title: 'Body Treatments',
            image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&w=1200&q=80',
            link: '/services/body',
            items: ['Body Polish', 'Detox Wrap', 'CBD Treatment', 'Aromatherapy']
        },
        {
            title: 'Nails',
            image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
            link: '/services/nails',
            items: ['Gel Manicure', 'Spa Pedicure', 'French Tip', 'Mani-Pedi Combo']
        },
        {
            title: 'Waxing',
            image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80',
            link: '/services/waxing',
            items: ['Brazilian', 'Full Leg', 'Full Face', 'Eyebrows']
        },
        {
            title: 'Tinting & Lashes',
            image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
            link: '/services/tinting',
            items: ['Lash Lift', 'Brow Lamination', 'Lash Extensions', 'Tinting']
        },
        {
            title: 'Spray Tan',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
            link: '/services/spraytan',
            items: ['Original Tan', 'Rapid Tan', 'Competition Tan', 'Express Tan']
        }
    ]
};

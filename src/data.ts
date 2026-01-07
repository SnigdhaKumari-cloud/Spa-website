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
        description: 'Experience therapeutic massage with our certified therapists.',
        image: massageImg,
        icon: 'fa-hands',
        services: [
            { name: 'Swedish Massage', desc: 'Classic relaxation massage', price: 89, duration: '60 min' },
            { name: 'Deep Tissue Massage', desc: 'Targets deep muscle tension', price: 109, duration: '60 min' },
            { name: 'Hot Stone Massage', desc: 'Heated volcanic stones for deep relaxation', price: 129, duration: '75 min', featured: true },
            { name: 'Couples Massage', desc: 'Side-by-side relaxation experience', price: 249, duration: '60 min' },
            { name: 'Sports Massage', desc: 'For athletes and active individuals', price: 119, duration: '60 min' },
        ]
    },
    facial: {
        title: 'Facial Treatments',
        subtitle: 'Radiant Skin',
        description: 'Advanced skincare for a glowing complexion.',
        image: facialImg,
        icon: 'fa-face-smile',
        services: [
            { name: 'Classic Facial', desc: 'Deep cleansing and hydration', price: 120, duration: '60 min' },
            { name: 'Anti-Aging Facial', desc: 'Reduces fine lines with microcurrent', price: 180, duration: '75 min', featured: true },
            { name: 'Hydrating Facial', desc: 'Intense moisture for dry skin', price: 150, duration: '60 min' },
            { name: 'Brightening Facial', desc: 'Even skin tone with vitamin C', price: 160, duration: '60 min' },
            { name: 'Acne Treatment', desc: 'Clear breakouts with LED therapy', price: 140, duration: '60 min' },
        ]
    },
    body: {
        title: 'Body Treatments',
        subtitle: 'Total Renewal',
        description: 'Luxurious treatments for complete body wellness.',
        image: bodyImg,
        icon: 'fa-leaf',
        services: [
            { name: 'Body Scrub', desc: 'Full-body exfoliation', price: 150, duration: '60 min' },
            { name: 'Detox Body Wrap', desc: 'Purifying seaweed and clay wrap', price: 180, duration: '75 min', featured: true },
            { name: 'Hydrating Wrap', desc: 'Deep moisture restoration', price: 170, duration: '75 min' },
            { name: 'Body Contouring', desc: 'Reduces cellulite and firms skin', price: 200, duration: '90 min' },
        ]
    },
    nails: {
        title: 'Nail Services',
        subtitle: 'Beautiful Nails',
        description: 'Premium manicures and pedicures.',
        image: nailImg,
        icon: 'fa-hand-sparkles',
        services: [
            { name: 'Classic Manicure', desc: 'Nail shaping, cuticle care, polish', price: 45, duration: '30 min' },
            { name: 'Gel Manicure', desc: 'Long-lasting chip-free finish', price: 65, duration: '45 min', featured: true },
            { name: 'Spa Manicure', desc: 'Deluxe with exfoliation and mask', price: 75, duration: '60 min' },
            { name: 'Classic Pedicure', desc: 'Complete foot care', price: 55, duration: '45 min' },
            { name: 'Gel Pedicure', desc: 'Long-lasting for beach-ready feet', price: 75, duration: '60 min' },
            { name: 'Luxury Spa Pedicure', desc: 'Hot stone and paraffin wax', price: 95, duration: '75 min' },
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
    { name: 'Sarah Williams', role: 'Lead Massage Therapist', exp: '8 years', avatar: 'https://randomuser.me/api/portraits/women/45.jpg' },
    { name: 'Michael Chen', role: 'Senior Esthetician', exp: '10 years', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Emily Rodriguez', role: 'Nail Artist', exp: '6 years', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'David Kim', role: 'Body Treatment Specialist', exp: '7 years', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
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
    { q: 'What should I wear?', a: 'We provide robes and slippers. Wear comfortable clothing.' },
    { q: 'How early should I arrive?', a: 'Please arrive 15 minutes before your appointment.' },
    { q: 'What is the cancellation policy?', a: '24-hour notice required for cancellations.' },
    { q: 'Do you offer gift cards?', a: 'Yes! Available in any amount from $50 to $1,000.' },
];

export const serviceOptions: ServiceOption[] = [
    { value: '', label: 'Select a service' },
    { value: 'massage', label: 'Massage Therapy' },
    { value: 'facial', label: 'Facial Treatments' },
    { value: 'body', label: 'Body Treatments' },
    { value: 'nails', label: 'Nail Services' },
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

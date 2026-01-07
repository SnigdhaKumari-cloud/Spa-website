// ================================
// SERENITY SPA - Business Constants
// ================================

import type { BusinessInfo, NavLink } from './types';

export const BUSINESS_INFO: BusinessInfo = {
    name: 'Serenity Spa',
    tagline: 'Your sanctuary for wellness and beauty in the heart of the city.',
    phone: '+1 (555) 123-4567',
    email: 'hello@serenityspa.com',
    address: {
        street: '123 Wellness Boulevard',
        suite: 'Suite 500',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        full: '123 Wellness Boulevard, Suite 500, New York, NY 10001'
    },
    hours: {
        weekday: { days: 'Mon - Fri', hours: '9AM - 9PM' },
        saturday: { days: 'Saturday', hours: '10AM - 8PM' },
        sunday: { days: 'Sunday', hours: '10AM - 8PM' }
    },
    social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        pinterest: '#'
    }
};

export const NAV_LINKS: NavLink[] = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
];

export const SERVICE_CATEGORIES: string[] = ['massage', 'facial', 'body', 'nails'];

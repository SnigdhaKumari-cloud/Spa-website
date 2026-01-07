// ================================
// SERENITY SPA - Type Definitions
// ================================

// Service Types
export interface Service {
    name: string;
    desc: string;
    price: number;
    duration: string;
    featured?: boolean;
}

export interface ServiceCategory {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    icon: string;
    services: Service[];
}

export interface ServiceCategories {
    [key: string]: ServiceCategory;
}

// Home Page Types
export interface HomeService {
    title: string;
    desc: string;
    price: number;
    img: string;
    link: string;
    icon: string;
}

export interface Stat {
    num: string;
    label: string;
}

export interface Testimonial {
    name: string;
    role: string;
    text: string;
    avatar: string;
}

// About Page Types
export interface CoreValue {
    icon: string;
    title: string;
    desc: string;
}

export interface TeamMember {
    name: string;
    role: string;
    exp: string;
    avatar: string;
    bio?: string;
}

export interface Certification {
    icon: string;
    text: string;
}

// Contact Page Types
export interface FAQ {
    q: string;
    a: string;
}

export interface ServiceOption {
    value: string;
    label: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

// Gallery Types
export interface GalleryImage {
    src: string;
    category: string;
    title: string;
}

// Package Types
export interface SpaPackage {
    name: string;
    tagline: string;
    price: number;
    icon: string;
    featured: boolean;
    features: string[];
}

// Navigation Types
export interface NavLink {
    path: string;
    label: string;
}

// Business Info Types
export interface BusinessHours {
    days: string;
    hours: string;
}

export interface BusinessAddress {
    street: string;
    suite: string;
    city: string;
    state: string;
    zip: string;
    full: string;
}

export interface SocialLinks {
    facebook: string;
    instagram: string;
    twitter: string;
    pinterest: string;
}

export interface BusinessInfo {
    name: string;
    tagline: string;
    phone: string;
    email: string;
    address: BusinessAddress;
    hours: {
        weekday: BusinessHours;
        saturday: BusinessHours;
        sunday: BusinessHours;
    };
    social: SocialLinks;
}

// Breadcrumb Types
export interface BreadcrumbItem {
    label: string;
    link?: string;
}

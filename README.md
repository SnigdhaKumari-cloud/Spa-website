# Serenity Spa Website

A premium luxury spa and wellness center website built with React and Vite.

![Serenity Spa](https://img.shields.io/badge/React-19.2-blue) ![Vite](https://img.shields.io/badge/Vite-7.2-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## 🌿 Features

- **Responsive Design** - Looks great on all devices
- **Fast Performance** - Built with Vite for optimal loading
- **Modern UI** - Glassmorphism, animations, and premium aesthetics
- **SEO Optimized** - Meta tags and semantic HTML
- **Multi-page SPA** - React Router for seamless navigation

## 📁 Project Structure

```
src/
├── assets/           # Images and static assets
│   └── images.js     # Centralized image exports
├── components/       # Reusable UI components
│   ├── Breadcrumb.jsx
│   ├── Footer.jsx
│   ├── LiveChat.jsx
│   ├── Navbar.jsx
│   ├── SectionHeader.jsx
│   └── ServiceCard.jsx
├── pages/            # Page components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Gallery.jsx
│   ├── Home.jsx
│   ├── ServiceDetail.jsx
│   └── Services.jsx
├── styles/           # CSS files
│   ├── main.css      # Design system & utilities
│   └── components.css # Component-specific styles
├── App.jsx           # Main app component with routing
├── constants.js      # Business info & configuration
├── data.js           # Centralized content data
└── main.jsx          # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Business Information
Edit `src/constants.js` to update:
- Business name, phone, email
- Address and hours
- Social media links

### Content & Services
Edit `src/data.js` to update:
- Service categories and pricing
- Testimonials
- Team members
- FAQ content

### Styling
- `src/styles/main.css` - CSS variables, typography, utilities
- `src/styles/components.css` - Component styles

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, services, testimonials |
| Services | `/services` | All service categories |
| Service Detail | `/services/:type` | Individual service details |
| About | `/about` | Company story, values, team |
| Gallery | `/gallery` | Photo gallery with lightbox |
| Contact | `/contact` | Booking form and contact info |

## 🛠 Tech Stack

- **React 19** - UI library
- **React Router 7** - Client-side routing
- **Vite 7** - Build tool
- **Vanilla CSS** - Custom design system
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Playfair Display, Inter, Cormorant Garamond)

## 📝 License

MIT License - feel free to use for your own projects!

<!-- Trigger deployment: 2026-01-31 -->
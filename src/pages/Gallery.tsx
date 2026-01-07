import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import {
    heroImg,
    massageImg,
    facialImg,
    bodyImg,
    nailImg,
    receptionImg
} from '../assets/images';
import type { GalleryImage } from '../types';

export default function Gallery(): JSX.Element {
    const [filter, setFilter] = useState<string>('all');
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

    const images: GalleryImage[] = [
        { src: heroImg, category: 'spa', title: 'Luxury Interior' },
        { src: massageImg, category: 'massage', title: 'Massage Room' },
        { src: facialImg, category: 'facial', title: 'Facial Treatment' },
        { src: bodyImg, category: 'body', title: 'Body Treatment' },
        { src: nailImg, category: 'nails', title: 'Nail Station' },
        { src: receptionImg, category: 'spa', title: 'Reception Area' },
    ];

    const categories: string[] = ['all', 'spa', 'massage', 'facial', 'body', 'nails'];
    const filtered = filter === 'all' ? images : images.filter(img => img.category === filter);

    return (
        <>
            <section style={{ padding: '180px 0 80px', background: 'var(--gradient-warm)', textAlign: 'center' }}>
                <div className="container">
                    <span className="subtitle">Visual Journey</span>
                    <h1 style={{ marginTop: 'var(--space-sm)' }}>Our Gallery</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <SectionHeader subtitle="Explore" title="Serenity Spa Experience" />

                    {/* Filter Buttons */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-2xl)', flexWrap: 'wrap' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                                style={{ textTransform: 'capitalize' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="gallery-grid">
                        {filtered.map((img, i) => (
                            <div key={i} className="gallery-item reveal" onClick={() => setLightboxImg(img.src)}>
                                <img src={img.src} alt={img.title} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span className="gallery-title">{img.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxImg && (
                <div className="lightbox active" onClick={() => setLightboxImg(null)}>
                    <div className="lightbox-content">
                        <img src={lightboxImg} alt="Lightbox" />
                    </div>
                    <button className="lightbox-close">&times;</button>
                </div>
            )}
        </>
    );
}

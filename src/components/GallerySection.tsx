import { galleryImages } from '../data';
import SectionHeader from './SectionHeader';

export default function GallerySection() {
    return (
        <section className="section gallery-section" id="ambience">
            <div className="container">
                <SectionHeader
                    subtitle="Our Ambience"
                    title="A Sanctuary of Peace"
                    description="Take a visual journey through our luxurious facilities designed for your ultimate comfort."
                />
                <div className="gallery-masonry">
                    {galleryImages.map((img, i) => (
                        <div key={i} className="gallery-item reveal">
                            <img src={img.url} alt={img.title} />
                            <div className="gallery-overlay">
                                <span>{img.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

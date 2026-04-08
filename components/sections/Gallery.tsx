import type { GalleryItem, BrandingContent } from '@/types/content';

const galleryFallbacks: Record<string, string[]> = {
  plumbing: [
    'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop',
  ],
  hvac: [
    'https://images.unsplash.com/photo-1631567091790-53d21c1c4ad9?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop',
  ],
  electrical: [
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop',
  ],
  mechanical: [
    'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop',
  ],
  general: [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop',
  ],
};

interface GalleryProps {
  items: GalleryItem[];
  branding: BrandingContent;
}

export default function Gallery({ items, branding }: GalleryProps) {
  const allPlaceholder = !items || items.length === 0 || items.every((i) => i.isPlaceholder);
  const trade = branding.trade?.toLowerCase() ?? 'general';
  const fallbacks = galleryFallbacks[trade] ?? galleryFallbacks.general;

  if (allPlaceholder) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Our work</span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">Recent Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fallbacks.map((src, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={src} alt="Work sample" className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                  📷 Add real photo
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label">Our work</span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Recent Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.filter((i) => !i.isPlaceholder && i.src).map((item, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

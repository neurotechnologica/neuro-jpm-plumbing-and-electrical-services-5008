'use client';

import { HeroContent, BrandingContent, MetaContent } from '@/types/content';
import { useBooking } from '@/components/booking/BookingContext';

interface HeroSectionProps {
  hero: HeroContent;
  branding: BrandingContent;
  phone: MetaContent['phone'];
}

const heroFallbacks: Record<string, string> = {
  plumbing: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop',
  hvac: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&auto=format&fit=crop',
  electrical: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&auto=format&fit=crop',
  mechanical: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1600&auto=format&fit=crop',
  general: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&auto=format&fit=crop',
};

export default function HeroSection({ hero, branding, phone }: HeroSectionProps) {
  const { openModal } = useBooking();
  const trade = branding.trade?.toLowerCase() ?? 'general';
  const heroImage = branding.heroImageUrl ?? heroFallbacks[trade] ?? heroFallbacks.general;

  return (
    <section
      className="relative min-h-[680px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient overlay — darker at bottom for text, lighter at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white/90 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
          Available 24/7 · No call-out fee before 8pm
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-5 leading-[1.1] text-white">
          {hero.headline}
        </h1>
        <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed">
          {hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => openModal()}
            className="px-8 py-4 rounded-xl font-semibold text-white text-base bg-[var(--color-accent)] hover:brightness-110 transition-all shadow-lg shadow-black/30"
          >
            {hero.ctaText}
          </button>
          <a
            href={`tel:${phone}`}
            className="px-8 py-4 rounded-xl font-semibold text-base border-2 border-white/70 text-white hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm"
          >
            📞 {hero.phoneCtaText}
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
          <span>✓ Licensed &amp; Insured</span>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <span>✓ Same-day service</span>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <span>✓ Upfront pricing</span>
        </div>
      </div>
    </section>
  );
}

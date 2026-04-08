'use client';

import Image from 'next/image';
import { AboutContent, BrandingContent } from '@/types/content';
import { useBooking } from '@/components/booking/BookingContext';
import PlaceholderBlock from '@/components/ui/PlaceholderBlock';

interface AboutSectionProps {
  about: AboutContent;
  branding: BrandingContent;
}

const isPlaceholder = (v: string | null | undefined) => !v || v.startsWith('[PLACEHOLDER');

export default function AboutSection({ about, branding }: AboutSectionProps) {
  const { openModal } = useBooking();
  const story = branding.ownerStory && !isPlaceholder(branding.ownerStory)
    ? branding.ownerStory
    : isPlaceholder(about.story) ? null : about.story;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — photo + stats */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            {branding.ownerPhotoUrl ? (
              <Image
                src={branding.ownerPhotoUrl}
                alt={branding.ownerName ?? 'Owner photo'}
                width={120}
                height={120}
                className="rounded-full object-cover w-[120px] h-[120px] shadow-lg ring-4 ring-[var(--color-accent)]/20"
              />
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div
                  style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
                  className="w-28 h-28 rounded-full flex items-center justify-center text-white font-bold text-2xl select-none shadow-lg"
                >
                  {(branding.ownerName ?? 'AB').slice(0, 2).toUpperCase()}
                </div>
                <PlaceholderBlock description="Add owner photo URL to branding.ownerPhotoUrl in content.json" value={null} />
              </div>
            )}

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="bg-gray-50 rounded-2xl p-5 text-center">
                <div className="text-4xl font-bold text-[var(--color-primary)]">{about.yearsInBusiness}+</div>
                <div className="text-gray-500 text-sm mt-1">Years in business</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-5 text-center">
                <div className="text-4xl font-bold text-[var(--color-primary)]">{about.certifications.length}</div>
                <div className="text-gray-500 text-sm mt-1">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right — story + certs + CTA */}
          <div className="flex flex-col gap-7">
            <div>
              <span className="section-label">About us</span>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                {branding.ownerName ? `Meet ${branding.ownerName}` : 'Our Story'}
              </h2>
              {story ? (
                <p className="text-gray-600 leading-relaxed text-base">{story}</p>
              ) : (
                <PlaceholderBlock description="Add your business story to branding.ownerStory or about.story in content.json" value={null} />
              )}
            </div>

            {about.certifications.length > 0 && (
              <ul className="flex flex-wrap gap-2" aria-label="Certifications">
                {about.certifications.map((cert, i) => (
                  <li key={i} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20">
                    ✓ {cert}
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={() => openModal()}
              className="self-start px-8 py-3.5 rounded-xl font-semibold text-white bg-[var(--color-accent)] hover:brightness-110 transition-all shadow-md"
            >
              {about.ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

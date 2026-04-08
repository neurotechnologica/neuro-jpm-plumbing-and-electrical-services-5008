'use client';

import { ServiceItem } from '@/types/content';
import { useBooking } from '@/components/booking/BookingContext';

interface ServicesGridProps {
  services: ServiceItem[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  const { openModal } = useBooking();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">What we do</span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">Our Services</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Fast, reliable work across every job — big or small.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col gap-4 overflow-hidden"
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-4xl">{service.icon}</div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>

              {service.priceIndicator && (
                <p className="text-sm font-semibold text-[var(--color-accent)]">{service.priceIndicator}</p>
              )}

              <button
                onClick={() => openModal(service.name)}
                className="mt-auto w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] transition-colors"
              >
                {service.ctaText}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

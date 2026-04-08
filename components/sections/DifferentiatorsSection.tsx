import { DifferentiatorsContent } from '@/types/content';

interface DifferentiatorsSectionProps {
  differentiators: DifferentiatorsContent;
}

export default function DifferentiatorsSection({ differentiators }: DifferentiatorsSectionProps) {
  return (
    <section id="differentiators" className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 bg-white/10 text-white/70">
            Why us
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-3">
            {differentiators.heading}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {differentiators.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { ReviewsContent } from '@/types/content';

interface ReviewsStripProps {
  reviews: ReviewsContent;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-200'} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default function ReviewsStrip({ reviews }: ReviewsStripProps) {
  const { aggregateRating, totalCount, items } = reviews;

  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">Reviews</span>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-5xl font-bold text-gray-900">{aggregateRating.toFixed(1)}</span>
            <div className="flex flex-col items-start gap-1">
              <StarRating rating={Math.round(aggregateRating)} />
              <span className="text-gray-400 text-sm">{totalCount} verified reviews</span>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((review, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <StarRating rating={review.rating} />
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"{review.text}"</p>
              <footer className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="font-semibold text-gray-800 text-sm">{review.name}</span>
                <time dateTime={review.date} className="text-xs text-gray-400">
                  {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                </time>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import StarRating from './StarRating';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;
  const activeTestimonial = testimonials[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
  };

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 id="testimonials-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            What Our Travellers Say
          </h2>
          <p className="mt-3 text-slate-600">
            Real stories from real adventurers who explored the world with us.
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <article
            data-testid="active-testimonial"
            className="rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-100"
          >
            <StarRating rating={activeTestimonial.rating} />
            <blockquote className="mt-4 text-lg italic text-slate-700">
              &ldquo;{activeTestimonial.quote}&rdquo;
            </blockquote>
            <p className="mt-6 font-semibold text-slate-900">{activeTestimonial.name}</p>
            <p className="text-sm text-slate-500">{activeTestimonial.location}</p>
          </article>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Previous
            </button>

            <div className="flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeIndex ? 'bg-amber-500' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next testimonial"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Next
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <StarRating rating={testimonial.rating} />
              <p className="mt-3 text-sm text-slate-600">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{testimonial.name}</p>
              <p className="text-xs text-slate-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

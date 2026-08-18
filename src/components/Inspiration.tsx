import { inspirationHighlight, inspirationOffers } from '@/data/inspiration';

export default function Inspiration() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="inspiration-heading">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 to-indigo-600 p-8 text-white sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-100">
              {inspirationHighlight.subtitle}
            </p>
            <h2 id="inspiration-heading" className="mt-2 text-3xl font-bold sm:text-4xl">
              {inspirationHighlight.title}
            </h2>
            <p className="mt-4 text-sky-100">{inspirationHighlight.description}</p>
            <a
              href={inspirationHighlight.ctaHref}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 shadow transition hover:bg-sky-50"
            >
              {inspirationHighlight.ctaLabel}
            </a>
          </div>
          <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72">
            <img
              src={inspirationHighlight.image}
              alt={inspirationHighlight.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-slate-900">Get Inspired For Your Next Trip</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inspirationOffers.map((offer) => (
              <article
                key={offer.id}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100"
              >
                <div className="h-40 w-full overflow-hidden">
                  <img src={offer.image} alt={offer.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="text-lg font-semibold text-slate-900">{offer.title}</h4>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{offer.description}</p>
                  <a
                    href={offer.ctaHref}
                    className="mt-4 inline-flex items-center justify-center rounded-full border border-sky-600 px-4 py-2 text-sm font-semibold text-sky-600 transition hover:bg-sky-600 hover:text-white"
                  >
                    {offer.ctaLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

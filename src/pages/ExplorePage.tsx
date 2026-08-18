import { useSearchParams } from 'react-router-dom'
import { PACKAGE_TYPE_OPTIONS } from '../types/search'
import './ExplorePage.css'

export default function ExplorePage() {
  const [searchParams] = useSearchParams()

  const destination = searchParams.get('destination') ?? ''
  const checkIn = searchParams.get('checkIn') ?? ''
  const checkOut = searchParams.get('checkOut') ?? ''
  const travellers = searchParams.get('travellers') ?? ''
  const packageType = searchParams.get('packageType') ?? ''

  const packageLabel =
    PACKAGE_TYPE_OPTIONS.find((option) => option.value === packageType)?.label ??
    packageType

  const hasSearch = destination || checkIn || checkOut || travellers || packageType

  return (
    <main className="explore-page">
      <h1>Explore</h1>
      {hasSearch ? (
        <section className="explore-page__summary" data-testid="search-summary">
          <p>
            Showing results for <strong>{destination || 'anywhere'}</strong>
          </p>
          <ul>
            {checkIn && <li>Check-in: {checkIn}</li>}
            {checkOut && <li>Check-out: {checkOut}</li>}
            {travellers && <li>Travellers: {travellers}</li>}
            {packageLabel && <li>Package: {packageLabel}</li>}
          </ul>
        </section>
      ) : (
        <p>Start your search from the homepage to see tailored results.</p>
      )}
    </main>
  )
}

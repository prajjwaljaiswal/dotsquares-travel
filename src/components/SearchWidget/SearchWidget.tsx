import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  DEFAULT_SEARCH_VALUES,
  PACKAGE_TYPE_OPTIONS,
  SearchFormValues,
} from '../../types/search'
import './SearchWidget.css'

interface SearchWidgetProps {
  onSearch?: (values: SearchFormValues) => void
}

export default function SearchWidget({ onSearch }: SearchWidgetProps) {
  const navigate = useNavigate()
  const [values, setValues] = useState<SearchFormValues>(DEFAULT_SEARCH_VALUES)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    field: keyof SearchFormValues,
    value: string | number,
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (error) setError(null)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!values.destination.trim()) {
      setError('Please enter a destination')
      return
    }

    if (values.checkIn && values.checkOut && values.checkOut < values.checkIn) {
      setError('Check-out date must be after check-in date')
      return
    }

    if (values.travellers < 1) {
      setError('At least one traveller is required')
      return
    }

    const params = new URLSearchParams({
      destination: values.destination.trim(),
      checkIn: values.checkIn,
      checkOut: values.checkOut,
      travellers: String(values.travellers),
      packageType: values.packageType,
    })

    onSearch?.(values)
    navigate(`/explore?${params.toString()}`)
  }

  return (
    <form className="search-widget" onSubmit={handleSubmit} aria-label="Travel search">
      <div className="search-widget__field search-widget__field--destination">
        <label htmlFor="destination">Destination</label>
        <input
          id="destination"
          name="destination"
          type="text"
          placeholder="Where do you want to go?"
          value={values.destination}
          onChange={(e) => handleChange('destination', e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="search-widget__field">
        <label htmlFor="checkIn">Check-in</label>
        <input
          id="checkIn"
          name="checkIn"
          type="date"
          value={values.checkIn}
          onChange={(e) => handleChange('checkIn', e.target.value)}
        />
      </div>

      <div className="search-widget__field">
        <label htmlFor="checkOut">Check-out</label>
        <input
          id="checkOut"
          name="checkOut"
          type="date"
          value={values.checkOut}
          onChange={(e) => handleChange('checkOut', e.target.value)}
        />
      </div>

      <div className="search-widget__field search-widget__field--travellers">
        <label htmlFor="travellers">Travellers</label>
        <input
          id="travellers"
          name="travellers"
          type="number"
          min={1}
          max={20}
          value={values.travellers}
          onChange={(e) => handleChange('travellers', Number(e.target.value))}
        />
      </div>

      <div className="search-widget__field search-widget__field--package">
        <label htmlFor="packageType">Package type</label>
        <select
          id="packageType"
          name="packageType"
          value={values.packageType}
          onChange={(e) => handleChange('packageType', e.target.value)}
        >
          {PACKAGE_TYPE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="search-widget__error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="search-widget__submit">
        Search
      </button>
    </form>
  )
}

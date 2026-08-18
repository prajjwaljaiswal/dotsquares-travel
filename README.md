# dotsquares-travel

## UI Component Library

This repository contains a shared, reusable UI component library under `src/components/ui`. It includes:

- `Button` — primary actionable element with `variant` (`primary` | `secondary` | `outline` | `ghost` | `danger`) and `size` (`sm` | `md` | `lg`) props, plus a `loading` state.
- `Card` — generic content container with `variant` (`elevated` | `outlined` | `filled`) and `padding` (`sm` | `md` | `lg`) props.
- `Badge` — small status/label chip with `variant` (`default` | `success` | `warning` | `danger` | `info`) and `size` props.
- `Alert` — contextual feedback banner with `variant` (`info` | `success` | `warning` | `error`) and optional `dismissible` behavior.
- `Modal` — accessible dialog overlay with focus handling, Escape-to-close, and `size` (`sm` | `md` | `lg`) prop.
- `Tabs` / `TabList` / `Tab` / `TabPanel` — keyboard-navigable tabbed interface with full ARIA roles.
- `Input` — labeled text field with `size`, `error`, and `helperText` props.
- `Select` — labeled native dropdown with `options`, `size`, `error`, and `helperText` props.
- `DatePicker` — accessible wrapper around the native date input with `label`, `size`, `min`/`max`, and validation props.
- `Rating` — interactive or read-only star rating with keyboard support (`ArrowLeft`/`ArrowRight`).

All components are fully typed (TypeScript), responsive, and accessible (visible keyboard focus rings via `.ds-focusable`, ARIA roles/labels, and live regions where appropriate).

### Usage

```tsx
import { Button, Card, Badge } from '@/components/ui';

function Example() {
  return (
    <Card variant="outlined" padding="md" title="Trip Summary">
      <Badge variant="success">Confirmed</Badge>
      <Button variant="primary" size="md">Book Now</Button>
    </Card>
  );
}
```

### Component Showcase

Run the app locally to view every component with its variants and sizes rendered together, similar to a Storybook index page:

```bash
npm install
npm run dev
```

The showcase route lives at `src/App.tsx` and mounts via `src/main.tsx`.

## Destination Detail Page

The Destination Detail Page includes a map section that shows the
destination's location.

### Map Section (Placeholder)

The map section currently uses a **static placeholder component**,
`MapContainer` (`src/components/MapContainer.tsx`), instead of a real
interactive map. This is intentional and clearly marked in code with
comments (`PLACEHOLDER COMPONENT`).

- The component renders a styled div showing a location icon, the
  location label, and the provided coordinates — it does **not** call
  any external map API.
- It already exposes the props interface required for future real map
  integration:
  - `lat: number`
  - `lng: number`
  - `locationLabel: string`
  - `className?: string` (optional, for layout customization)
- When a real map provider (e.g., Google Maps, Mapbox, Leaflet) is
  integrated, only the internals of `MapContainer` need to change —
  consuming pages (e.g., `DestinationDetailPage`) will not need to be
  updated since the props contract stays the same.

See `src/pages/DestinationDetailPage.tsx` for usage of the map section
within the destination detail page.
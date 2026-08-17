import React, { useState } from 'react';
import {
  Alert,
  Badge,
  Button,
  Card,
  DatePicker,
  Input,
  Modal,
  Rating,
  Select,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from './components/ui';

/**
 * Component showcase route. Renders every reusable UI component with its
 * variants and sizes so the design system can be reviewed end-to-end,
 * similar in spirit to a Storybook index page.
 */
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(3);
  const [inputValue, setInputValue] = useState('');

  return (
    <main className="ds-app">
      <h1>UI Component Showcase</h1>
      <p>Reusable, accessible building blocks from src/components/ui.</p>

      <section className="ds-section">
        <h2>Button</h2>
        <div className="ds-row">
          <Button variant="primary" size="sm">Primary sm</Button>
          <Button variant="primary" size="md">Primary md</Button>
          <Button variant="primary" size="lg">Primary lg</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" loading aria-label="Saving">Saving</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      <section className="ds-section">
        <h2>Card</h2>
        <div className="ds-row">
          <Card variant="elevated" padding="md" title="Elevated Card">
            Default shadow card used for content grouping.
          </Card>
          <Card variant="outlined" padding="md" title="Outlined Card">
            Bordered card variant.
          </Card>
          <Card variant="filled" padding="sm" title="Filled Card">
            Compact filled card.
          </Card>
        </div>
      </section>

      <section className="ds-section">
        <h2>Badge</h2>
        <div className="ds-row">
          <Badge variant="default">Default</Badge>
          <Badge variant="success">Confirmed</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="danger">Cancelled</Badge>
          <Badge variant="info" size="lg">Info lg</Badge>
        </div>
      </section>

      <section className="ds-section">
        <h2>Alert</h2>
        <div className="ds-row" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <Alert variant="info" title="Heads up">Your itinerary was updated.</Alert>
          <Alert variant="success" title="Success" dismissible>Booking confirmed.</Alert>
          <Alert variant="warning" title="Warning">Your session will expire soon.</Alert>
          <Alert variant="error" title="Error">Payment could not be processed.</Alert>
        </div>
      </section>

      <section className="ds-section">
        <h2>Modal</h2>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </Button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Confirm Booking"
          size="md"
        >
          <p>Are you sure you want to confirm this booking?</p>
          <div className="ds-row" style={{ justifyContent: 'flex-end', marginTop: 16 }}>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </div>
        </Modal>
      </section>

      <section className="ds-section">
        <h2>Tabs</h2>
        <Tabs defaultValue="flights">
          <TabList aria-label="Search categories">
            <Tab value="flights">Flights</Tab>
            <Tab value="hotels">Hotels</Tab>
            <Tab value="cars">Cars</Tab>
          </TabList>
          <TabPanel value="flights">Showing flight results.</TabPanel>
          <TabPanel value="hotels">Showing hotel results.</TabPanel>
          <TabPanel value="cars">Showing car rental results.</TabPanel>
        </Tabs>
      </section>

      <section className="ds-section">
        <h2>Input</h2>
        <div className="ds-row" style={{ flexDirection: 'column', alignItems: 'stretch', maxWidth: 320 }}>
          <Input
            label="Destination"
            placeholder="Where are you going?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            helperText="City or airport"
          />
          <Input label="Email" error="Please enter a valid email address" />
        </div>
      </section>

      <section className="ds-section">
        <h2>Select</h2>
        <div style={{ maxWidth: 320 }}>
          <Select
            label="Trip Type"
            placeholder="Choose a trip type"
            options={[
              { label: 'One-way', value: 'one-way' },
              { label: 'Round-trip', value: 'round-trip' },
              { label: 'Multi-city', value: 'multi-city' },
            ]}
          />
        </div>
      </section>

      <section className="ds-section">
        <h2>DatePicker</h2>
        <div style={{ maxWidth: 320 }}>
          <DatePicker label="Departure Date" min="2024-01-01" helperText="Select a future date" />
        </div>
      </section>

      <section className="ds-section">
        <h2>Rating</h2>
        <div className="ds-row" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Rating value={rating} onChange={setRating} aria-label="Rate this hotel" size="lg" />
          <Rating value={4} readOnly aria-label="Average guest rating" size="sm" />
        </div>
      </section>
    </main>
  );
}

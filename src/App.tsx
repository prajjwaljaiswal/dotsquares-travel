import React, { useState } from 'react';
import {
  Button,
  Card,
  Badge,
  Modal,
  Alert,
  Tabs,
  Input,
  Select,
  DatePicker,
  Rating,
} from './components/ui';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(3);
  const [selectValue, setSelectValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showAlert, setShowAlert] = useState(true);

  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      content: <p className="text-gray-700">Overview content for the component showcase.</p>,
    },
    {
      id: 'usage',
      label: 'Usage',
      content: <p className="text-gray-700">Usage examples and code snippets go here.</p>,
    },
    {
      id: 'accessibility',
      label: 'Accessibility',
      content: <p className="text-gray-700">All components support keyboard navigation and ARIA attributes.</p>,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Dotsquares Travel — UI Component Showcase</h1>
        <p className="mt-2 text-gray-600">
          A living reference for the shared UI kit. Each section below demonstrates the available variants and
          sizes for a component.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Buttons</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="primary" isLoading>
            Loading
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Cards</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card variant="elevated" padding="lg" title="Elevated Card">
            This card uses the elevated variant with large padding.
          </Card>
          <Card variant="outlined" padding="md" title="Outlined Card">
            This card uses the outlined variant with medium padding.
          </Card>
          <Card variant="filled" padding="sm" title="Filled Card">
            This card uses the filled variant with small padding.
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Badges</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="info" size="sm">
            Small
          </Badge>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Alert</h2>
        {showAlert && (
          <Alert variant="info" title="Heads up" onClose={() => setShowAlert(false)}>
            This is an informational alert that can be dismissed.
          </Alert>
        )}
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Modal</h2>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </Button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Example Modal" size="md">
          <p className="text-gray-700">This modal traps focus and closes on Escape or overlay click.</p>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </div>
        </Modal>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Tabs</h2>
        <Tabs items={tabItems} defaultTabId="overview" />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Form Controls</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Input
            label="Destination"
            placeholder="Where to?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            helperText="Start typing to search destinations"
          />
          <Select
            label="Trip type"
            placeholder="Select a trip type"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
            options={[
              { value: 'one-way', label: 'One way' },
              { value: 'round-trip', label: 'Round trip' },
              { value: 'multi-city', label: 'Multi-city' },
            ]}
          />
          <DatePicker
            label="Departure date"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            minDate={new Date().toISOString().split('T')[0]}
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-700">Rate your trip</span>
            <Rating value={rating} onChange={setRating} label="Trip rating" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
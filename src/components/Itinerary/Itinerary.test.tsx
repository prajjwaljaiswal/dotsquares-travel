import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Itinerary } from './Itinerary';
import type { ItineraryDay } from './Itinerary.types';

const mockDays: ItineraryDay[] = [
  {
    day: 1,
    title: 'Arrival in Paris',
    description: 'Welcome to the City of Light! Begin your journey with a scenic drive to your hotel.',
    activities: ['Airport transfer', 'Hotel check-in', 'Evening stroll along the Seine'],
    accommodation: 'Hotel Le Marais',
    meals: ['Dinner']
  },
  {
    day: 2,
    title: 'Eiffel Tower & Seine Cruise',
    description: 'Experience the most iconic sights of Paris.',
    activities: ['Eiffel Tower visit', 'Seine River cruise', 'Dinner at a local bistro'],
    accommodation: 'Hotel Le Marais',
    meals: ['Breakfast', 'Dinner']
  },
  {
    day: 3,
    title: 'Louvre Museum & Montmartre',
    description: 'Art, culture, and bohemian charm await.',
    activities: ['Guided Louvre tour', 'Montmartre walking tour', 'Sacré-Cœur visit'],
    accommodation: 'Hotel Le Marais',
    meals: ['Breakfast', 'Lunch']
  }
];

describe('Itinerary', () => {
  it('renders the itinerary heading', () => {
    render(<Itinerary days={mockDays} />);
    expect(screen.getByText('Day-by-Day Itinerary')).toBeInTheDocument();
  });

  it('renders all days in both mobile and desktop views', () => {
    render(<Itinerary days={mockDays} />);
    
    expect(screen.getByText('Day 1')).toBeInTheDocument();
    expect(screen.getByText('Day 2')).toBeInTheDocument();
    expect(screen.getByText('Day 3')).toBeInTheDocument();
    expect(screen.getByText('Day 1: Arrival in Paris')).toBeInTheDocument();
    expect(screen.getByText('Day 2: Eiffel Tower & Seine Cruise')).toBeInTheDocument();
    expect(screen.getByText('Day 3: Louvre Museum & Montmartre')).toBeInTheDocument();
  });

  it('displays day content in desktop tabs', () => {
    render(<Itinerary days={mockDays} />);
    
    expect(screen.getByText('Welcome to the City of Light!')).toBeInTheDocument();
    expect(screen.getByText('Hotel Le Marais')).toBeInTheDocument();
  });

  it('hides non-active day content in desktop view', () => {
    render(<Itinerary days={mockDays} />);
    
    const day2Description = screen.getByText('Experience the most iconic sights of Paris.');
    expect(day2Description.closest('[role="tabpanel"]')).not.toBeVisible();
  });

  it('changes active day when clicking tabs', () => {
    render(<Itinerary days={mockDays} />);
    
    const day2Tab = screen.getByText('Day 2');
    fireEvent.click(day2Tab);
    
    expect(screen.getByText('Experience the most iconic sights of Paris.')).toBeVisible();
  });

  it('toggles accordion items on mobile', () => {
    render(<Itinerary days={mockDays} />);
    
    const accordionButton = screen.getByText('Day 1: Arrival in Paris');
    const description = screen.getByText('Welcome to the City of Light!');
    
    fireEvent.click(accordionButton);
    expect(description).not.toBeVisible();
    
    fireEvent.click(accordionButton);
    expect(description).toBeVisible();
  });

  it('displays activities list correctly', () => {
    render(<Itinerary days={mockDays} />);
    
    expect(screen.getByText('Airport transfer')).toBeInTheDocument();
    expect(screen.getByText('Hotel check-in')).toBeInTheDocument();
    expect(screen.getByText('Evening stroll along the Seine')).toBeInTheDocument();
  });

  it('displays meals information', () => {
    render(<Itinerary days={mockDays} />);
    
    expect(screen.getByText('Breakfast')).toBeInTheDocument();
    expect(screen.getByText('Lunch')).toBeInTheDocument();
    expect(screen.getByText('Dinner')).toBeInTheDocument();
  });

  it('handles empty activities gracefully', () => {
    const daysWithoutActivities: ItineraryDay[] = [
      {
        day: 1,
        title: 'Free Day',
        description: 'Enjoy a day at your leisure.',
        activities: []
      }
    ];
    
    render(<Itinerary days={daysWithoutActivities} />);
    expect(screen.getByText('Enjoy a day at your leisure.')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Itinerary days={mockDays} className="custom-class" />);
    const section = container.querySelector('section');
    expect(section?.classList.contains('custom-class')).toBe(true);
  });

  it('has proper ARIA attributes for accordion', () => {
    render(<Itinerary days={mockDays} />);
    
    const accordionButton = screen.getByText('Day 1: Arrival in Paris');
    
    expect(accordionButton).toHaveAttribute('aria-expanded', 'true');
    expect(accordionButton).toHaveAttribute('aria-controls');
  });

  it('manages multiple open accordion items', () => {
    render(<Itinerary days={mockDays} />);
    
    const day1Button = screen.getByText('Day 1: Arrival in Paris');
    const day2Button = screen.getByText('Day 2: Eiffel Tower & Seine Cruise');
    
    fireEvent.click(day2Button);
    
    expect(screen.getByText('Welcome to the City of Light!')).toBeVisible();
    expect(screen.getByText('Experience the most iconic sights of Paris.')).toBeVisible();
    
    fireEvent.click(day1Button);
    expect(screen.getByText('Welcome to the City of Light!')).not.toBeVisible();
    expect(screen.getByText('Experience the most iconic sights of Paris.')).toBeVisible();
  });
});
import { metadata } from './layout';

describe('RootLayout metadata', () => {
  it('has a defined title', () => {
    expect(metadata.title).toBe('Dotsquares Travel | Discover Your Next Adventure');
  });

  it('has a meaningful meta description', () => {
    expect(typeof metadata.description).toBe('string');
    expect((metadata.description as string).length).toBeGreaterThan(20);
  });
});

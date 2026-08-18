export default function Newsletter() {
  return (
    <section data-testid="section-newsletter" aria-labelledby="newsletter-heading">
      <div className="container">
        <h2 id="newsletter-heading">Stay Inspired</h2>
        <p>Subscribe to get the latest travel deals and inspiration delivered to your inbox.</p>
        <form aria-label="Newsletter signup">
          <label htmlFor="newsletter-email">Email address</label>
          <input id="newsletter-email" name="email" type="email" required placeholder="you@example.com" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

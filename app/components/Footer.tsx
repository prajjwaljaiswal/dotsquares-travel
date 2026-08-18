export default function Footer() {
  return (
    <footer data-testid="section-footer">
      <div className="container" style={{ padding: '24px 0', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Dotsquares Travel. All rights reserved.</p>
      </div>
    </footer>
  );
}

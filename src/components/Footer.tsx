export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p>&copy; {year} Dotsquares Travel. All rights reserved.</p>
    </footer>
  );
}

import React from 'react';
import Footer from './Footer';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="app-shell">
      <div className="app-shell__content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-shell__content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

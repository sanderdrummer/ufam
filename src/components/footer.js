import React from 'react';

const footerStyles = {
  padding: '2rem',
  textAlign: 'center',
};

export const Footer = () => (
  <footer className="footer" style={footerStyles}>
    <a
      href="https://www.facebook.com/U-Fam-166187194210155"
      rel="noopener noreferrer"
      className="highlight"
      target="_blank">
      check our facebook page
    </a>
  </footer>
);

Footer.displayName = 'Footer';

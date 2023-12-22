import React from 'react';
import './footer.scss';

type FooterProps = {
  children?: React.ReactNode;
};

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="footer">
      {children}
      <p>rayolivier@outlook.com</p>

      <p>Designed and built by Ray Olivier.</p>
    </footer>
  );
};

export default Footer;

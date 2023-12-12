import React from 'react';
import './footer.scss';

type FooterProps = {
  children?: React.ReactNode;
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="social-links"></div>
      Designed and built by Ray Olivier
    </footer>
  );
};

export default Footer;

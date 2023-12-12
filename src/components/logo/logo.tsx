import React from 'react';
import './logo.scss';

type LogoProps = {
  noAnimation?: boolean;
  size?: 'sm' | 'md';
};

const Logo: React.FC<LogoProps> = ({ size = 'sm' }) => {
  return (
    <div className={`logo logo--${size}`}>
      <div className="logo__bar">
        <div className="logo__circle"></div>
        <div className="logo__circle"></div>
        <div className="logo__circle"></div>
      </div>
      <div className="logo__content">
        <div className="logo__initial">R</div>
        <span className="logo__cursor">{/* <span className="logo__cursor__center"></span> */}</span>
      </div>
    </div>
  );
};

export default Logo;

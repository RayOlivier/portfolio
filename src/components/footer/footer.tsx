import React from 'react';
import './footer.scss';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

type FooterProps = {
  children?: React.ReactNode;
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <ul className="social-links">
        <li>
          <a href="mailto:rayolivier@outlook.com">
            <MdEmail size="3rem" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rayolivier/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </a>
        </li>
        <li>
          <a href="https://github.com/RayOlivier">
            <AiFillGithub size="3rem" />
          </a>
        </li>
      </ul>
      Designed and built by Ray Olivier.
    </footer>
  );
};

export default Footer;

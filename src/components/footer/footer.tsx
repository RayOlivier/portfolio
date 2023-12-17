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
          <a href="mailto:rayolivier@outlook.com" aria-label="Send me an email">
            <MdEmail size="3rem" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rayolivier/" target="_blank" aria-label="LinkedIn Profile">
            <AiFillLinkedin size="3rem" />
          </a>
        </li>
        <li>
          <a href="https://github.com/RayOlivier" target="_blank" aria-label="Github Profile">
            <AiFillGithub size="3rem" />
          </a>
        </li>
      </ul>
      <p>rayolivier@outlook.com</p>

      <p>Designed and built by Ray Olivier.</p>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './social-links.scss';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

type SocialLinksProps = {
  children?: React.ReactNode;
  size?: string;
};

const SocialLinks: React.FC<SocialLinksProps> = ({ size = '3rem' }) => {
  return (
    <ul className="social-links">
      <li>
        <a href="https://www.linkedin.com/in/rayolivier/" target="_blank" aria-label="LinkedIn Profile">
          <AiFillLinkedin size={size} />
        </a>
      </li>
      <li>
        <a href="https://github.com/RayOlivier" target="_blank" aria-label="Github Profile">
          <AiFillGithub size={size} />
        </a>
      </li>
      <li>
        <a href="mailto:rayolivier@outlook.com" aria-label="Send me an email">
          <MdEmail size={size} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;

import React from 'react';
import './card.scss';
import { AiFillGithub } from 'react-icons/ai';

type CardProps = {
  children?: React.ReactNode;
  //   description: string;
  href?: string;
  img: string;
  githubLink: string;
  tags: string[];
  title: string;
};

const Card: React.FC<CardProps> = ({ children, href, img, githubLink, tags, title }) => {
  return (
    <div className="project-card">
      {img && (
        <div className="project-card__image" style={{ backgroundImage: `url(${img})` }}>
          <div className="project-card__header">
            <h3 className="project-card__title">{title}</h3>
            <ul className="tag-list">
              {tags.map(tag => (
                <li className="tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="project-card__content">
        <div>{/* <h3 className="project-card__title">{title}</h3> */}</div>

        <div>
          <p>{children}</p>
          <div className="project-card__buttons">
            {href && (
              <a className="button-link" href={href} target="_blank">
                Demo
              </a>
            )}
            <a className="button-link" href={githubLink} target="_blank">
              Github
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

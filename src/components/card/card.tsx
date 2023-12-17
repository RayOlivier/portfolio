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
              <a href={href} target="_blank">
                <button>Demo</button>
              </a>
            )}
            <a href={githubLink} target="_blank">
              <button>
                Github
                <AiFillGithub />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

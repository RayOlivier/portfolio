import './App.scss';
import Footer from './components/footer/footer';
import { GiGecko } from 'react-icons/gi';
import { PiDiamondBold } from 'react-icons/pi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Card from './components/card/card';

import nextReviewImg2 from './assets/images/projects/nextReviews2.png';
import portfolioImg from './assets/images/projects/portfolioSite.png';
import pixelAdventureImg from './assets/images/projects/pixelAdventure.png';
import useMousePosition from './hooks/useMousePosition';
import useScrollPosition from './hooks/useScrollPosition';
import SocialLinks from './components/social-links/social-links';

function App() {
  const mousePosition = useMousePosition();
  const scrollPosition = useScrollPosition();

  return (
    <div
      className="app"
      style={
        mousePosition.x && mousePosition.y
          ? {
              // desktop
              background: `radial-gradient(800px at ${mousePosition.x}px ${scrollPosition + mousePosition.y}px, rgba(100, 100, 100, 0.15), transparent 70%)`
            }
          : {
              // no mouse, mobile
              background: `radial-gradient(300px at 0px ${scrollPosition + 50}px, rgba(100, 100, 100, 0.15), transparent 80%)`
            }
      }>
      <header className="header">
        <div className="landing">
          <div className="eyebrow">Hi,</div>
          <h1 className="introduction">
            I'm <span className="primary">Ray</span>
            <br />
            and I build <span className="bold">solutions.</span>
          </h1>

          <p className="tagline">I'm a front-end engineer passionate about creating custom, accessible software.</p>

          <div className="header__links">
            <SocialLinks size="4rem"></SocialLinks>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="section about">
          <h2>About me</h2>
          <div className="section__content about__content">
            <div className="about__text">
              <div>
                <p>
                  For the past 5 years, I've been delivering custom solutions to clients across industries. My goal is to exceed both deadlines and
                  expectations, while still prioritizing accessibility.
                </p>
                <p>I'm quietly confident and always ready to learn new tech, whether it's diving into the backend or mastering a new framework.</p>
                <p>
                  Outside of work, you can probably find me absorbed in an RPG or hanging with my geckos. <GiGecko />
                </p>
              </div>
            </div>
            <div>
              <h3>Top Skills</h3>
              <ul className="skills-list">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React.js</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Angular</li>
                <li>Next.js</li>
                <li>Testing</li>
                <li>Web Accessibility</li>
                <li>Semantic HTML</li>
                <li>CSS & Sass</li>
                <li>Agile Methodology</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section">
          <h2>Experience</h2>
          <div className="section__content">
            <p className="date-eyebrow">Jan 2019 - Dec 2023</p>
            <h3>Stellar Elements (projekt202)</h3>
            <ul className="experience-list">
              <li>
                <div className="bullet">
                  <PiDiamondBold />
                </div>{' '}
                Consulting for Fortune 500 clients across industries to deliver custom solutions and user experiences utilizing React.js and Angular.
              </li>
              <li>
                <div className="bullet">
                  <PiDiamondBold />
                </div>
                Delivered a new print document visualizer for a Fortune 500 company in time for the retirement of Adobe Flash.
              </li>
              <li>
                <div className="bullet">
                  <PiDiamondBold />
                </div>
                Founding and maintaining a greenfield component library supporting both React and Angular for one of the largest financial groups in the world.
              </li>
              <li>
                <div className="bullet">
                  <PiDiamondBold />
                </div>
                Collaborating with UX designers, developers, project management, and product owners on agile teams to fulfill business requirements.
              </li>
            </ul>
          </div>
        </section>
        <section className="section">
          <h2>Projects</h2>
          <div className="section__content">
            <p>
              You can find my most recent work pinned on{' '}
              <a href="https://github.com/RayOlivier" target="_blank">
                {' '}
                Github <HiOutlineExternalLink />
              </a>
              <br />
              <br />
            </p>
          </div>
          <div className="project-cards">
            <Card
              title="Personal Portfolio"
              githubLink="https://github.com/RayOlivier/portfolio"
              img={portfolioImg}
              tags={['React', 'TypeScript', 'Vite', 'Sass', 'Hooks']}>
              This site! A simplistic portfolio built from scratch with React.
            </Card>
            <Card
              title="Next Reviews"
              href="https://next-reviews-eta.vercel.app/"
              githubLink="https://github.com/RayOlivier/next-reviews"
              img={nextReviewImg2}
              tags={['NextJS', 'TypeScript', 'Tailwind', 'Strapi CMS']}>
              A review site for indie games and my first foray into NextJS.
            </Card>
            <Card
              title="Pixel Adventure"
              href="https://rayolivier.github.io/pixel-adventure/"
              githubLink="https://github.com/RayOlivier/pixel-adventure"
              img={pixelAdventureImg}
              tags={['Flutter', 'Dart', 'Flame', 'Tiled']}>
              A web game demo built within a few weeks of picking up Flutter and Dart.
            </Card>
          </div>
        </section>
        <section className="section contact">
          <h2>Contact</h2>
          <div className="section__content">
            <p>
              Whether you have an opportunity or just want to chat, my inbox is open!
              <br />
              <br />
              Let's <a href="https://www.linkedin.com/in/rayolivier/">connect on LinkedIn</a>, or feel free to{' '}
              <a href="mailto:rayolivier@outlook.com">shoot me an email</a>!
            </p>
          </div>
        </section>
        <Footer>
          <SocialLinks></SocialLinks>
        </Footer>
      </main>
    </div>
  );
}

export default App;

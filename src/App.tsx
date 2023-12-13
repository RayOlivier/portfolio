import './App.scss';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import { GiGecko } from 'react-icons/gi';

function App() {
  return (
    <>
      <Nav></Nav>
      <main className="main">
        <section className="section">
          <div className="landing">
            <div className="eyebrow">Hi</div>
            <h1 className="introduction">
              I'm <span>Ray</span> and I make websites.
            </h1>
            <p className="tagline">I'm a front-end engineer with a passion for creating custom, accessible solutions.</p>
          </div>
        </section>
        <section className="section">
          <h2>About me</h2>
          <div className="skills-content">
            <div>
              {/* <h3>The Man</h3> */}
              <div>
                <p>Since 2019, I've been building custom solutions for clients </p>
                <p>I believe that software should be accessible, beautiful, and performant.</p>
                {/* <p>I'm a front-end engineer with expertise in creating beautiful and accessible web solutions with modern frameworks and best practices.</p> */}
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
                <li>React</li>
                <li>Angular</li>
                <li>NextJS</li>
                <li>CSS & Sass</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section">
          <h2>Experience</h2>
          <div></div>
        </section>
        <section className="section">
          <h2>Projects</h2>
          <p>portfolio cards go here, link to github</p>
        </section>
        <section className="section contact">
          <h2>Contact</h2>
          <p>
            Whether you have an opportunity or just want to chat, my inbox is always open! Let's <a>connect on LinkedIn</a> or <a>shoot me an email.</a>
          </p>

          <p>
            Or if you're old school, here's my email: <span className="contact__email">rayolivier@outlook.com</span>
          </p>
          {/* <ul className="contact-list">
            <li>
              <a className="contact-link" href="mailto:rayolivier@outlook.com">
                <MdEmail size="4rem" />
                rayolivier@outlook.com
              </a>
            </li>
            <li>
              <a className="contact-link" href="https://www.linkedin.com/in/rayolivier/" target="_blank">
                <AiFillLinkedin size="4rem" />
                LinkedIn
              </a>
            </li>
            <li>
              <a className="contact-link" href="https://github.com/RayOlivier">
                <AiFillGithub size="4rem" />
                Github
              </a>
            </li>
          </ul> */}
        </section>
      </main>
      <Footer> </Footer>
    </>
  );
}

export default App;

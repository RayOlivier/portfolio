import './App.scss';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';

function App() {
  return (
    <>
      <Nav></Nav>
      <main className="main">
        <section className="section landing">
          <div className="eyebrow">Hi</div>
          <h1 className="introduction">
            I'm <span>Ray</span> and I make websites.
          </h1>
          <p className="tagline">some tagline BS</p>
        </section>
        <section className="section">
          <h2>Skills</h2>
          <p>skills go here</p>
        </section>
        <section className="section">
          <h2>Experience</h2>
          <p>experience list go here, link to resume??</p>
        </section>
        <section className="section">
          <h2>Portfolio</h2>
          <p>portfolio cards go here, link to github</p>
        </section>
        <section className="section">
          <h2>Contact</h2>
          <p>links to email, linkedin, github</p>
        </section>
      </main>
      <Footer> </Footer>
    </>
  );
}

export default App;

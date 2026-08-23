export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="logo">BuildLink</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#materials">Find Materials</a>
          <a href="#request">Request Materials</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="tagline">BUILD • CONNECT • GROW</p>

          <h1>
            Building materials,
            <br />
            <span>made easier.</span>
          </h1>

          <p className="description">
            BuildLink connects builders, contractors, homeowners and suppliers
            so you can find the materials you need and get your project moving.
          </p>

          <div className="buttons">
            <a href="#materials" className="primary">
              Find Materials
            </a>

            <a href="#request" className="secondary">
              Request Materials
            </a>
          </div>
        </div>
      </section>

      <section id="materials" className="section">
        <p className="tagline">EXPLORE</p>
        <h2>Find the materials you need</h2>

        <div className="cards">
          <div className="card">
            <h3>Cement</h3>
            <p>Find cement suppliers near your project.</p>
          </div>

          <div className="card">
            <h3>Steel</h3>
            <p>Connect with suppliers for steel and reinforcement bars.</p>
          </div>

          <div className="card">
            <h3>Sand & Ballast</h3>
            <p>Find quality construction aggregates.</p>
          </div>

          <div className="card">
            <h3>Bricks & Blocks</h3>
            <p>Discover suppliers for building blocks and bricks.</p>
          </div>
        </div>
      </section>

      <section id="request" className="request">
        <p className="tagline">NEED SOMETHING?</p>
        <h2>Request building materials</h2>

        <p>
          Tell suppliers what you need, where you need it and how much you
          need.
        </p>

        <a href="mailto:hello@buildlink.com" className="primary">
          Make a Request
        </a>
      </section>

      <section id="about" className="section about">
        <p className="tagline">ABOUT BUILDLINK</p>
        <h2>Connecting the construction community</h2>

        <p>
          BuildLink is designed to make it easier for people working on
          construction projects to find materials and connect with suppliers.
        </p>
      </section>

      <footer>
        <strong>BuildLink</strong>
        <p>Find materials. Connect with suppliers. Build better.</p>
      </footer>
    </main>
  );
}

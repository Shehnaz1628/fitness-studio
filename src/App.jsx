import './App.css'

const classes = [
  {
    name: 'Strength Circuit',
    time: 'Mon · Wed · Fri — 6:30 AM',
    blurb: 'Full-body power work with short rest and smart progression.',
  },
  {
    name: 'Flow & Mobility',
    time: 'Tue · Thu — 7:00 AM',
    blurb: 'Move better, recover faster, and build lasting flexibility.',
  },
  {
    name: 'HIIT Burn',
    time: 'Sat — 9:00 AM',
    blurb: 'High-intensity intervals designed to push pace without burnout.',
  },
]

function App() {
  return (
    <div className="page">
      <nav className="nav" aria-label="Primary">
        <a className="nav-brand" href="#top">
          PULSE
        </a>
        <div className="nav-links">
          <a href="#classes">Classes</a>
          <a href="#book">Book</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <h1 className="brand">
            PULSE
            <br />
            <span>FITNESS</span>
          </h1>
          <p className="tagline">
            Train with intention. A modern studio for strength, mobility, and
            lasting energy.
          </p>
          <div className="cta-row" id="book">
            <a className="btn btn-primary" href="#classes">
              View classes
            </a>
            <a className="btn btn-ghost" href="mailto:hello@pulse.studio">
              Book a visit
            </a>
          </div>
        </div>
      </header>

      <section className="classes" id="classes">
        <div className="classes-head">
          <h2>This week&apos;s classes</h2>
          <p>Small groups. Clear coaching. Results you can feel.</p>
        </div>
        <ul className="class-list">
          {classes.map((item) => (
            <li className="class-item" key={item.name}>
              <h3>{item.name}</h3>
              <span className="class-meta">{item.time}</span>
              <p>{item.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <span>Pulse Fitness Studio</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  )
}

export default App

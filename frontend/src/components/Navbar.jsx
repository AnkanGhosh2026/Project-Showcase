const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <div className="navbar-logo-icon">✦</div>
          <span className="navbar-brand">
            <span>Ankan</span> Ghosh
          </span>
        </a>

        <div className="navbar-links">
          <button className="nav-link" onClick={() => scrollTo('about')}>About</button>
          <button className="nav-link" onClick={() => scrollTo('skills')}>Skills</button>
          <button className="nav-link" onClick={() => scrollTo('projects')}>Projects</button>
          <button className="nav-link" onClick={() => scrollTo('process')}>Process</button>
          <button className="nav-link nav-link-cta" onClick={() => scrollTo('contact')}>Contact →</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

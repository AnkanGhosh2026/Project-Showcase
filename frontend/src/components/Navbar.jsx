import { Sparkles, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollTo('top'); }}>
          <div className="navbar-logo-icon">
            <Sparkles size={18} />
          </div>
          <span className="navbar-brand">
            <span className="gradient-text">Ankan</span> Ghosh
          </span>
        </a>

        <div className="navbar-links">
          <button onClick={() => scrollTo('top')} className="nav-link nav-link-active">Home</button>
          <button onClick={() => scrollTo('progress')} className="nav-link">Monthly Progress</button>
          <button onClick={() => scrollTo('projects')} className="nav-link">Applied Builds</button>
          <button onClick={() => scrollTo('concepts')} className="nav-link">Proof of Concepts</button>
          <button onClick={() => scrollTo('client-demo')} className="nav-link">Client Demo</button>
          
          <button className="nav-icon-btn" aria-label="Toggle theme">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

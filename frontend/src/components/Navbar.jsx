import { useState, useEffect } from 'react';
import { Sparkles, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (!isDarkMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

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
          <button onClick={() => scrollTo('client-demo')} className="nav-link">Client Demo</button>
          
          <button onClick={toggleTheme} className="nav-icon-btn" aria-label="Toggle theme">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 className="footer-name" style={{ marginBottom: '16px' }}>
          Ankan <span className="gradient-text">Ghosh</span>
        </h3>
        
        <div className="footer-socials">
          <a 
            href="https://github.com/AnkanGhosh2026?tab=repositories" 
            target="_blank" 
            rel="noreferrer"
            className="footer-social-link"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="mailto:ankanghosh2026@outlook.com" 
            className="footer-social-link"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <p className="footer-copy">
          © {currentYear} All rights reserved. Architecting the future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* <p className="footer-name">
          Built by <span>Ankan Ghosh</span>
        </p> */}
        <p className="footer-copy">© {year} · All projects are live & deployed</p>
      </div>
    </footer>
  );
};

export default Footer;

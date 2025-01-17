import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-dark text-center py-3">
      <div className="container">
        <p className="mb-1">© 2025 Find @ Skills. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://www.facebook.com" className="text-dark" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li className="list-inline-item">|</li>
          <li className="list-inline-item">
            <a href="https://www.twitter.com" className="text-dark" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li className="list-inline-item">|</li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com" className="text-dark" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

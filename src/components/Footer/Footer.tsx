import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

interface FooterProps {
  // Add any props if needed in the future
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="site-maps">
        <nav>
          <ul>
            <li><Link to={''}>Login</Link></li>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/store'}>Store</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            
          </ul>
        </nav>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

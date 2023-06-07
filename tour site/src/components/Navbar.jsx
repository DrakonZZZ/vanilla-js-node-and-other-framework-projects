import React from 'react';
import logo from '../assets/logo.png';
import links from './links';
import socialLinks from './socialLinks';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {links.map((link) => {
            const { id, linkName, description } = link;
            return (
              <li key={id}>
                <a href={linkName} className="nav-link">
                  {description}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, URL, icon } = link;
            return (
              <li key={id}>
                <a
                  href={URL}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

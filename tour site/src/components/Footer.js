import React from 'react';
import links from './links';
import socialLinks from './socialLinks';
const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.linkName} className="footer-link">
                  {link.description}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            const { id, URL, icon } = link;
            return (
              <li key={id}>
                <a
                  href={URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Ficitonal Country Road tours company
          <span id="date"></span> all rights reserved
        </p>
        <p className="copyright">Code licensed MIT</p>
      </footer>
    </>
  );
};

export default Footer;

import {
  FaBars,
  FaTwitter,
  FaTwitch,
  FaReddit,
  FaFacebook,
} from 'react-icons/fa';

import { links, social } from '../data';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [showLinks, setUselinks] = useState(false);
  const linksContainerRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) linksContainerRef.current.style.height = `${linksHeight}px`;
    else linksContainerRef.current.style.height = '0px';
  }, [showLinks]);
  return (
    <div>
      <div className="nav-center">
        <div className="nav-header">
          <img
            src="https://www.nicepng.com/png/detail/436-4361187_logo-random.png"
            alt="retro"
            style={{ widows: '30px', height: '30px' }}
          />
          <button
            className="nav-toggle"
            onClick={() => setUselinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <>
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((link) => {
            return (
              <>
                <li key={link.id}>
                  <a href={link.url}>{link.icon}</a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

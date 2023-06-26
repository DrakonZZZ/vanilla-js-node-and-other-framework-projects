import { FaBars } from 'react-icons/fa';
import { useContext } from 'react';
import { GlobalContext } from '../../context';

const Navbar = () => {
  const { displaySidebar, displayModal, hideModal } = useContext(GlobalContext);

  const showSecondaryMenu = (e) => {
    const page = e.target.textContent;
    const tempBound = e.target.getBoundingClientRect();
    const posCenter = (tempBound.left + tempBound.right) / 2;
    const posBottom = tempBound.bottom - 3;
    displayModal(page, { posCenter, posBottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      hideModal();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/skullcandy-1-logo-png-transparent.png"
          alt="skully"
          className="logo"
        />
        <button className="btn toggle-btn" onClick={displaySidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <button className="nav-link" onMouseOver={showSecondaryMenu}>
            products
          </button>
        </li>
        <li>
          <button className="nav-link" onMouseOver={showSecondaryMenu}>
            developers
          </button>
        </li>
        <li>
          <button className="nav-link" onMouseOver={showSecondaryMenu}>
            company
          </button>
        </li>
        <button className="btn sign-in">Sign in</button>
      </ul>
    </nav>
  );
};

export default Navbar;

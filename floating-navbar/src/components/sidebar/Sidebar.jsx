import { useContext } from 'react';
import { GlobalContext } from '../../context';
import { FaTimes } from 'react-icons/fa';
import sublinks from '../../data';

const Sidebar = () => {
  const { isSidebar, hideSidebar } = useContext(GlobalContext);

  return (
    <div className={`${isSidebar ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={hideSidebar}>
          <FaTimes />
        </button>
        <div>
          {sublinks.map((data, idx) => {
            const { links, page } = data;
            return (
              <article key={idx}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, idx) => {
                    return (
                      <a key={idx} href={link.url}>
                        {link.icon}
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

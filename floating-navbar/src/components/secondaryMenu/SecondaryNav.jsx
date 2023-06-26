import { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../../context';

const SecondaryNav = () => {
  const containerRef = useRef();
  const {
    isModal,
    position,
    page: { page, links },
  } = useContext(GlobalContext);

  useEffect(() => {
    const { posCenter, posBottom } = position;
    const submenu = containerRef.current;

    submenu.style.left = `${posCenter}px`;
    submenu.style.top = `${posBottom + 2}px`;
  }, [position]);
  return (
    <aside
      ref={containerRef}
      className={`${isModal ? 'submenu show-submenu' : 'submenu'}`}
    >
      <h5>{[page]}</h5>
      <div className="submenu-links">
        {links.map((data, idx) => {
          return (
            <a key={idx} href={data.link}>
              {data.icon}
              {data.label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default SecondaryNav;

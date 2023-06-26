import { useContext } from 'react';
import { GlobalContext } from '../../context';

const Main = () => {
  const { hideModal } = useContext(GlobalContext);

  return (
    <div className="hero-container">
      <div className="hero-center">
        <h1>
          This is where everything{' '}
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/skullcandy-1-logo-png-transparent.png"
            alt="skully"
            className="logo"
          />
          ends
        </h1>
      </div>
    </div>
  );
};

export default Main;

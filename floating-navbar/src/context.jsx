import { createContext, useContext, useState } from 'react';
import sublinks from './data';

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const [position, setPosition] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const displaySidebar = () => {
    setIsSidebar(true);
  };

  const hideSidebar = () => {
    setIsSidebar(false);
  };

  const displayModal = (text, position) => {
    const pageData = sublinks.find((data) => text === data.page);
    setPage(pageData);
    setPosition(position);
    setIsModal(true);
  };

  const hideModal = () => {
    setIsModal(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isModal,
        isSidebar,
        position,
        page,
        displayModal,
        displaySidebar,
        hideModal,
        hideSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

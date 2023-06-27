import {
  useState,
  useContext,
  createContext,
  useReducer,
  useEffect,
} from 'react';
import cartItems from './data';
import reducer from './reducer';

const AppContext = createContext();

const initState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const clearList = () => {
    dispatch({ type: `CLEAR_LIST` });
  };

  const increaseItem = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  useEffect(() => {
    dispatch({ type: 'CART_TOTAL' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearList,
        increaseItem,
        decreaseItem,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

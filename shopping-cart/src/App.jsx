import { useGlobalContext } from './context';
import Navbar from './Navbar';
import CartContainer from './CartContainer';

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <>
        <div className="loading-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
  }
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;

import { useGlobalContext } from './context';
import Navbar from './Navbar';
import CartContainer from './CartContainer';

function App() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;

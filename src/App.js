import { CartProvider } from 'react-use-cart';
import Home from './screens/HomePage/rk_hp'
function App() {
  return (
   <CartProvider>
  <Home/>
  </CartProvider>
  );
}

export default App;

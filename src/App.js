import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Login from './components/Login/Login';
import Signup from './components/Signup.js/Signup';
import Shipping from './components/Shipping/Shipping';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <PrivateRouter><Inventory></Inventory></PrivateRouter>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'shipping',
          element: <PrivateRouter><Shipping></Shipping></PrivateRouter>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        }
      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

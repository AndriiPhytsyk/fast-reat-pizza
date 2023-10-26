import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home.jsx';
import Error from './ui/Error.jsx';
import Menu, { loader as menuLoader } from './features/menu/Menu.jsx';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder.jsx';
import Cart from './features/cart/Cart.jsx';
import Order, { loader as orderLoader } from './features/order/Order.jsx';
import AppLayout from './ui/AppLayout.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        errorElement: <Error />,
        element: <Menu />,
        loader: menuLoader,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:id',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

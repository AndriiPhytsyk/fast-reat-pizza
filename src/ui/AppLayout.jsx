import CartOverview from '../features/cart/CartOverview.jsx';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header.jsx';
import Loader from './Loader.jsx';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="my-10 overflow-auto">
        <main className="mx-auto max-w-3xl overflow-y-auto ">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;

import SearchOrder from '../features/order/SearchOrder.jsx';
import { Link } from 'react-router-dom';
import Username from '../features/user/Username.jsx';

function Header() {
  return (
    <header className="flex items-center justify-between border-b  border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-[5px]">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;

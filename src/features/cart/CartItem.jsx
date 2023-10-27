import { formatCurrency } from '../../utils/helpers.js';
import DeleteItem from './DeleteItem.jsx';
import UpdateItemsQuantity from './UpdateItemsQuantity.jsx';
import { geCurrentQuantityById } from './cartSlice.js';
import { useSelector } from 'react-redux';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(geCurrentQuantityById(pizzaId));
  console.log(currentQuantity);

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemsQuantity
          currentQuantity={currentQuantity}
          pizzaId={pizzaId}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;

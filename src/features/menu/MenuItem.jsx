import { formatCurrency } from '../../utils/helpers.js';
import Button from '../../ui/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, geCurrentQuantityById, getCart } from '../cart/cartSlice.js';
import DeleteItem from '../cart/DeleteItem.jsx';
import UpdateItemsQuantity from '../cart/UpdateItemsQuantity.jsx';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(geCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddItemToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm"> {formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemsQuantity
                currentQuantity={currentQuantity}
                pizzaId={id}
              />
              <DeleteItem pizzaId={id}></DeleteItem>
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={handleAddItemToCart} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

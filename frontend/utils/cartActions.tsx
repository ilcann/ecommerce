import { ICart, ICartItem } from '@/types';
import { updateCart } from '@/services/cartService';

// Increase quantity of a cart item
export const handleIncreaseQuantity = async (cart: ICart, item: ICartItem) => {
   await updateCart({
    cart: cart,
    product: item.product,
    quantity: item.quantity + 1,
  });
};

// Decrease quantity of a cart item
export const handleDecreaseQuantity = async (cart: ICart, item: ICartItem) => {
  if (item.quantity > 1) {
    await updateCart({
      cart: cart,
      product: item.product,
      quantity: item.quantity - 1,
    });
  }
};

// Remove item from cart
export const handleRemoveItem = async (cart: ICart, item: ICartItem) => {
  await updateCart({
    cart: cart,
    product: item.product,
    quantity: 0, // Remove the item by setting quantity to 0
  });
};
import { ICart, IUser } from "@/types";
import { CartC } from "@/components";
import { fetchCart } from "@/services/cartService";

const Cart = async () => {
    const user: IUser = { username: "123" }; // mock user
    const initialCart: ICart = await fetchCart(user); // fetch cart data from an API or database

    return (
        <CartC initialCart={initialCart}/>
    )
}

export default Cart;
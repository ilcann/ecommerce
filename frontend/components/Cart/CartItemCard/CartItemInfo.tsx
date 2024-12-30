import { CartItem } from "../../../types/types";
import { ProductInfo } from "../../Products/ProductCard";

const CartItemInfo: React.FC<{item: CartItem}> = ({item}) => {
    return (
        <ProductInfo product={item.product}/>
    );
}

export default CartItemInfo;
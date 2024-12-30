import { ProductImg } from '../../Products/ProductCard';
import { CartItem } from '../../../types/types';

const CartItemInfo: React.FC<{item: CartItem}> = ({item}) => {
    return (
        <ProductImg product={item.product}/>
    );
}

export default CartItemInfo;
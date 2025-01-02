import axios from 'axios';
import { ICart, ICartUpdate } from '@/types';
const serverURL = "https://ecomcartservice-gqhxgngjdkedghd3.germanywestcentral-01.azurewebsites.net"

const fetchCartById = async (id: number): Promise<ICart> => {
    const reqURL = `/api/cart/summary/${id}`

    try {
        const response = await axios.get<ICart>(serverURL + reqURL);
        const cart = {
            id: id,
            items: response.data.items.map((item) => {
              return {
                cartId: id,
                product: item.product,
                quantity: item.quantity
              };
            })
        };
        return (cart);

    } catch (error) {
        console.error('Error fetching cart:', error);
        return { 
            id: 0,
            items: [],
        }; // Hata durumunda boş bir yanıt döner
    }
};

// updateCart
const updateCart = async (cartUpdate: ICartUpdate): Promise<void> => {
    const reqURL = '/api/cart/update';
    const req = {
        username: String(cartUpdate.cartItem.cartId),
        productId: Number(cartUpdate.cartItem.product.id),
        quantity: Number(cartUpdate.newQuantity),
    };
    console.log(cartUpdate);
    const jsonStr = JSON.stringify(req);
    console.log(jsonStr);
    try {
        console.log("olcak mı");
        const response = await fetch(serverURL + reqURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors',
            body: jsonStr,
        })

        if (response.ok) {
            console.log('Cart updated successfully');
        } else {
            console.error('Failed to update cart:', response.statusText);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
};

export {fetchCartById, updateCart};
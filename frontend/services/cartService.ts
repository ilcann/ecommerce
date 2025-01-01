import axios from 'axios';

import { ICart, ICartUpdate } from '@/types';
import { json } from 'stream/consumers';

const serverURL = "https://ecomcartservice-gqhxgngjdkedghd3.germanywestcentral-01.azurewebsites.net"

// fetchCart
const fetchCartById = async (id: number): Promise<ICart> => {
    const reqURL = `/api/cart/summary/${id}`

    try {
        const response = await axios.get<ICart>(serverURL + reqURL);
        return ({
            id: id,
            items: response.data.items.map((item) => ({
                product: item.product,
                quantity: item.quantity,
            }))
        })
    } catch (error) {
        console.error('Error fetching cart:', error);
        return { 
            id,
            items: [],
        }; // Hata durumunda boş bir yanıt döner
    }
};



// updateCart
const updateCart = async (cartUpdate: ICartUpdate): Promise<void> => {
    const reqURL = '/api/cart/update';
    
    const req = {
        username: String(cartUpdate.cart.id),
        productId: Number(cartUpdate.product.id),
        quantity: Number(cartUpdate.quantity),
    };
    console.log(req);
    const jsonStr = JSON.stringify(req);
    console.log(jsonStr);

    try {
        const response = await fetch(serverURL + reqURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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

export { fetchCartById, updateCart };
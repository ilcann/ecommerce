'use server'

import { ICart, IUser, RCart, RCartUpdate } from "@/types";
import axios from 'axios';
import endpoints from "./endpoints";
import { convertRCartToICart } from "./typeConverter";

export const fetchCart = async (user: IUser): Promise<ICart> => {
    // Boş bir sepet nesnesi tanımlıyoruz
    const emptyCart: ICart = { 
        id: 0, 
        items: [],
        totalPrice: 0,
        totalDiscount: 0,
        total: 0, 
    };

    // Kullanıcı kontrolü yapıyoruz
    if (!user) {
        return emptyCart;
    }

    try {
        // API'den yanıt alıyoruz
        const response = await axios.get<RCart>(endpoints.cart.getCart(user));

        // Gelen verilerde items olup olmadığını kontrol ediyoruz
        if (!response.data.items || response.data.items.length === 0) {
            return emptyCart; // Eğer items yoksa boş sepet döndür
        } else {
            // Gelen verileri uygun formata dönüştürüyoruz
            const cart: ICart = convertRCartToICart(response.data);
            return cart;
        }
    } catch (error) {
        console.error("Sepet alınırken bir hata oluştu:", error);
        return emptyCart; // Hata durumunda boş sepet döndür
    }
};

// updateCart
export const updateCart = async (cartUpdate: RCartUpdate): Promise<void> => {
    try {
        await axios.post('https://ecomcartservice-gqhxgngjdkedghd3.germanywestcentral-01.azurewebsites.net/api/cart/update' , cartUpdate);
        console.log('Cart updated successfully');
    } catch (error) {
        console.error('Error updating cart:', error);
    }
};
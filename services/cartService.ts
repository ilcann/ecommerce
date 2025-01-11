import { ICart, IUser, RCart } from "@/types";
import axios from 'axios';
import endpoints from "./endpoints";
import { convertRCartToICart } from "./typeConverter";

export const fetchCart = async (user: IUser): Promise<ICart> => {
    // Boş bir sepet nesnesi tanımlıyoruz
    const emptyCart: ICart = { id: 0, items: [] };

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

//TODO: UpdateCart methodu yapılacak    
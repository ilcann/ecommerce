import { IProduct, RProduct } from "@/types";
import axios from 'axios';
import endpoints from "./endpoints";
import { convertRProductToIProduct } from "./typeConverter";

export const fetchProducts = async (): Promise<IProduct[]> => {
    // Boş bir ürün listesi tanımlıyoruz
    const emptyList: IProduct[] = [];

    try {
        // API'den yanıt alıyoruz
        const response = await axios.get<RProduct[]>(endpoints.products.list);

        // Gelen verilerde ürün olup olmadığını kontrol ediyoruz
        if (!response.data || response.data.length === 0) {
            return emptyList; // Eğer ürün listesi boşsa boş liste döndür
        } else {
            // Gelen verileri uygun formata dönüştürüyoruz
            const products: IProduct[] = response.data.map((product)=>convertRProductToIProduct(product));
            return products;
        }
    } catch (error) {
        console.error("Ürün listesi alınırken bir hata oluştu:", error);
        return emptyList; // Hata durumunda boş ürün listesi döndür
    }
};

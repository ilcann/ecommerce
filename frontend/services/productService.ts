import axios from 'axios';
import { IProduct } from '@/types';

const targetUrl = "https://ecomcartservice-gqhxgngjdkedghd3.germanywestcentral-01.azurewebsites.net/api/product";

export const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    console.log("fetching")
    const response = await axios.get(targetUrl);
    const products: IProduct[] = response.data.map((product) => ({
        id: product.id,
        brand: product.brand,
        name: product.title,
        description: product.description,
        category: product.category,
        price: product.price,
        discountPercentage: product.discountPercentage,
        rating: product.rating,
        stock: product.stock,
        thumbnail: product.thumbnail,
    }))
    return products;
  } catch (error) {
    return [];
  }
};
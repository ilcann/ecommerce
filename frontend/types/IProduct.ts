export interface IProduct {
    id: number;
    brand: string;
    name: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    discountedPrice: number;
    rating: number;
    stock: number;
    thumbnail: string;
}
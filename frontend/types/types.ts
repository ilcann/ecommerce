export type Product = {
    id: number;
    brand: string;
    name: string;
    description: string;
    category: string;
    subCategory: string;
    gender: string;
    price: number;
    discount: number;
    discountedPrice: number;
    stock: number;
    rating: number;
    imageUrl: string;
};

export type CartItem = {
    product: Product;
    quantity: number;
}

export type Cart = {
    id: number;
    items: CartItem[];
}
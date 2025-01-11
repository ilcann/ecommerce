export type RProduct = {
    id: number; // integer($int32)
    title: string;
    description?: string; // nullable: true, maxLength: 500
    category?: string; // nullable: true, maxLength: 100
    brand?: string; // nullable: true, maxLength: 100
    sku?: string; // nullable: true, maxLength: 100
    price: number; // number($double)
    discountPercentage: number; // number($double)
    rating: number; // number($double)
    stock: number; // integer($int32)
    weight: number; // integer($int32)
    minimumOrderQuantity: number; // integer($int32)
    images: string[]; // Assuming an array of strings for image URLs or paths
    thumbnail?: string; // nullable: true, maxLength: 200
};
  
import products from "./products";
import { Cart } from "../../types/types";

const carts: Cart[] = [
    {
        id: 0,
        items: [
            { product: products[1], quantity: 2 },
            { product: products[2], quantity: 3 },
        ]
    },
];

export default carts;
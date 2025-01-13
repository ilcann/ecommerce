import { IProduct } from "@/types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import PriceTag from "./PriceTag";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "@/app/actions";

interface ProductCardProps {
    product: IProduct;
}

export default function ProductCard({product}: ProductCardProps) {
    return (
        <Card>
            <CardMedia  component="img" src={product.thumbnail}/>
            <CardContent>
                <Typography variant="h6" fontWeight={'bold'}>{product.brand}</Typography>
                <Typography>{product.title}</Typography>
                <PriceTag price={product.price} discountPercentage={product.discountPercentage} quantity={1}/>
                <AddToCartButton productId={product.id} incrementProductQuantity={incrementProductQuantity}/>
            </CardContent>
        </Card>
    )
}
import { IProduct } from "@/types";
import { Box, Button, Card, CardMedia, Rating, Typography } from "@mui/material";
import ProductPrice from "./ProductPrice";
import React from "react";

const Product: React.FC<{ product: IProduct }> = ({ product }) => {
    return (
        <Card>
            <Box
                p={2}
                display="flex"
                flexDirection="column"
                gap={1}
            >
                <CardMedia component="img" image={product.thumbnail} sx={{bgcolor:'transparent'}}/>
                <Box>
                    <Typography sx={{fontWeight: 'bold'}} variant="h5">{product.brand}</Typography>
                    <Typography variant="h6">{product.name}</Typography>
                    <Rating name="read-only" value={product.rating || 0} readOnly />
                </Box>
                <ProductPrice product={product}/>
                <Button variant="outlined" color="inherit">Sepete Ekle</Button>
            </Box>
        </Card>
    );
}

export default Product;
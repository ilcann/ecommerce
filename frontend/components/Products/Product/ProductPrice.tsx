import { IProduct } from "@/types";
import { Box, Typography } from "@mui/material";

const ProductPrice: React.FC<{ product: IProduct }> = ({ product }) => {
    const { price, discountPercentage } = product;
    const discountedPrice = price * (1 - discountPercentage / 100);
    
    if (discountPercentage > 0) {

        return (
            <Box pb={1}>
                <Typography variant="h6" sx={{ textDecoration: 'line-through', color: 'grey'}}>
                    {price.toFixed(2)} ₺
                </Typography>
                
                <Typography variant="h6" color="textSecondary">
                    İndirim: %{discountPercentage}
                </Typography>

                <Typography variant="h5" sx={{fontWeight:'bold'}}>
                    {discountedPrice.toFixed(2)} ₺
                </Typography>
            </Box>
        )
    }

    return (
        <Box>
            <Typography variant="h5">{price.toFixed(2)} ₺</Typography>
        </Box>
    );
}

export default ProductPrice;
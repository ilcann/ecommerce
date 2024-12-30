import React from 'react';
import { Grid2 as Grid, Box, Typography} from '@mui/material';
import { ProductCard } from '../Products/ProductCard';
import { useCategory } from '../../context/CategoryContext';
import { useProduct } from '../../context/ProductContext';

const Products = () => {
    const { activeCategory } = useCategory();
    const { products } = useProduct();

    return (
        <Grid 
            container 
            direction={'column'}
            spacing={2}
        >
            <Grid
                size = {12}
                pl={2}
                pr={2}
            >
                <Box 
                    display={"flex"} 
                    flexDirection={"row"}
                    alignItems={'end'}
                    gap={1.5}
                >
                    <Typography variant = 'h4' fontWeight={600}>
                        {activeCategory}
                    </Typography>
                    <Typography variant = 'h6'>
                        {products.length} Ürün
                    </Typography>
                </Box>

            </Grid>
            <Grid container spacing={1} size={12}>
                {products.map((product) => (
                    <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3}}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Grid>

    )
}

export default Products;
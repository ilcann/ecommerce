import { IProduct } from "@/types";
import { Grid2 as Grid } from "@mui/material";
import { Product } from "./Product";

import { fetchProducts } from "@/services/productService";

export default async function Products() {
    const products:IProduct[] = await fetchProducts();
    return (
        <Grid 
            container
            spacing={2}
        >
            {products.map((product:IProduct) => (
                <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3}}>
                    <Product product={product}/>
                </Grid>               
            ))}
        </Grid>
    );
}   
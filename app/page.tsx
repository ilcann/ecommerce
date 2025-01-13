import { fetchProducts } from "@/lib/db/productService";
import { Grid2 as Grid } from "@mui/material";
import { ProductCard } from "@/components/";
export default async function Home() {
    const products = await fetchProducts();
    return (
        <Grid container direction={"row"} spacing={1} padding={2} maxWidth={'xl'} margin={'auto'}>
            {products.map((product) => (
                <Grid key={product.id} size={{xs:12, sm: 6, md: 4, lg:3}}>
                    <ProductCard product={product}/>
                </Grid>
            ))}
        </Grid>
    )
}

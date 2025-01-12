import { Container, Grid2 as Grid } from "@mui/material";
import { ProductCard } from "@/components/Products"
import { IProduct } from "@/types";

const Products = ({ products }: { products: IProduct[] }) => {

    return (      
    <Container disableGutters>
        <Grid container direction={"row"} spacing={1} padding={2}>
            {products.map((product) => (
                <Grid key={product.id} size={{xs:12, sm: 6, md: 4, lg:3}}>
                    <ProductCard product={product}/>
                </Grid>
            ))}
        </Grid>
    </Container>
    )
}

export default Products;
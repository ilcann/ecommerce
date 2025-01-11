import { fetchProducts } from "@/services/productService";
import { IProduct } from "@/types";
//import { IUser } from "@/types";
import { Container, Grid2 as Grid } from "@mui/material";
import { ProductCard } from "@/components"

export default async function Home() {
  //const user:IUser = {username: "123"};
  const products:IProduct[] = await fetchProducts();

  return (
    <div>
      <header>
      </header>
      <main>  
      <Container disableGutters>
        <Grid container direction={"row"} spacing={1} padding={2}>
          {products.map((product) => (
            <Grid key={product.id} size={{xs:12, sm: 6, md: 4, lg:3}}>
              <ProductCard product={product}/>
            </Grid>
          ))}
        </Grid>
      </Container>
      </main>
    </div>
  );
}

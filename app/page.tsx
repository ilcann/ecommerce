import { fetchProducts } from "@/services/productService";
import { fetchCart } from "@/services/cartService";
import { ICart, IProduct } from "@/types";
import { IUser } from "@/types";
import { Products, Cart } from "@/components";

export default async function Home() {
  const user:IUser = {username: "123"}; // mock user
  const products:IProduct[] = await fetchProducts();
  const cart:ICart = await fetchCart(user); // mock cart 

  return (
    <div>
      <header>
      </header>
      <main>
        <Cart cart={cart}/>
        <Products products={products}/>
      </main>
    </div>
  );
}

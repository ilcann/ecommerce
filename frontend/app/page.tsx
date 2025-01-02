import { Products, Cart } from "@/components";
import { Box } from "@mui/material";
export default  function Home() {

  return (
      <Box maxWidth={'lg'} m={'0 auto'} p={2}>
        <Cart/>
        <Products/>
      </Box>
  );
}

import { Products, Cart } from "@/components";
import { Box } from "@mui/material";
export default  function Home() {
  const showCart = true;

  return (
      <Box maxWidth={'lg'} m={'0 auto'} p={2}>
        { showCart ? (<Cart/>) : (<Products/>)}
      </Box>
  );
}

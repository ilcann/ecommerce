'use client'

import { Grid2 as Grid, Box} from '@mui/material';
import {Products, Header, Cart} from '../components/';
import { useUI } from '../context/UIContext';

export default function Home() {
  const { showCart } = useUI();

  return (
    <Grid container>
      <Header/>
      <Box maxWidth={'xl'} margin = {'0 auto'} pt={4} pb={4}>
        {showCart ? <Cart/> : <Products/>}
      </Box>
    </Grid>
  );
}
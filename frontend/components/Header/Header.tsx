import React from 'react';
import { AppBar, Box, Button ,Typography, IconButton} from '@mui/material';
import { ShoppingCart} from '@mui/icons-material';
import { useCategory } from '../../context/CategoryContext';
import { categories } from '../../pages/api/categories';
import { useUI } from '../../context/UIContext';


const Header = () => {
  const { activeCategory, setActiveCategory } = useCategory();
  const { showCart, toggleShowCart } = useUI();
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    
    if (showCart) {
      toggleShowCart();
    }
  };

  return (
    <AppBar position="sticky" sx={{background:'background', height:64}}>
      <Box display={'flex'} justifyContent={'flex-end'} sx={{height:'100%'}} pl={2} pr={2}>
        {/* Categories */}
        <Box display={'flex'} justifyContent={'center'} sx={{width: '100%',height:'100%' }}>
          {categories.map((category) => (
            <Button 
              key={category} 
              sx={{
                borderRadius: 0,
                pt:0, 
                pb:0, 
                pl:2, 
                pr:2,
                color:'text.primary',
                borderBottom: activeCategory === category && !showCart? '2px solid' : 'none',
                '&:hover': {
                  borderBottom: activeCategory === category ? '2px solid' : 'none',
                }
              }}
              onClick={() => handleCategoryClick(category)}
              
            >
              <Typography variant='button'>{category}</Typography>
            </Button>
          ))
          }
        </Box>
        {/* Cart Button */}
        <Box display={'inline-block'} justifyContent={'center'} alignContent={'center'}>
          <IconButton 
            onClick={toggleShowCart}
            sx={{
              color: showCart ? 'text.primary' : 'grey'}}
          >
            <ShoppingCart/>
          </IconButton>
        </Box>
      </Box>

    </AppBar>
  );
};

export default Header;

'use client'
import { useUI } from "@/context";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Container, Grid2 as Grid, IconButton, Typography} from "@mui/material"
import { MenuButton } from "../CustomButton/CustomButton";
import Link from "next/link";
import { usePathname } from 'next/navigation';


const Header = () => {
    const { showCart, toggleShowCart, setShowCart} = useUI();
    const pathname = usePathname();
    const isCartPage = pathname==='/cart';

    return (
        <Container disableGutters maxWidth='false' sx={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'}}>
            <Container disableGutters sx={{pl:2, pr:2}}>
                <Box maxWidth="xl" display="flex" justifyContent="space-between" alignItems="center">
                    {/* Left section: ECommerce link */}
                    <Box display={'flex'} flexDirection={'row'}>
                        {/* Left section: ECommerce link */}
                        <Link href={'/'} onClick={isCartPage ? () => setShowCart(false) : () => {}} >
                            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} height={'100%'}>
                                <Typography variant="h4" fontWeight="bold">ECommerce</Typography>
                            </Box>
                        </Link>
                        {/* Center section: Products link */}
                        <Link href="/">
                            <MenuButton text="Ürünler" showCart={showCart} onClick={isCartPage? setShowCart(false) : () => {}} height="100%" />
                        </Link>
                    </Box>

                    {/* Right section: Shopping cart icon */}
                    <Box p={2}>
                        <Link href={isCartPage ? '/' : '/cart'} passHref>
                            <IconButton 
                             size="medium" 
                             onClick={toggleShowCart}
                             sx={{ color: isCartPage ? 'black' : 'lightgray' }}>
                                <ShoppingCartOutlined fontSize="medium" />
                            </IconButton>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Container>
    )
}

export default Header;
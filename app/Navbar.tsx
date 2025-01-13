'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import { MenuButton, ShoppingCartButton } from "@/components";

export default function Navbar() {
    const pathname = usePathname();
    const isCartPage = pathname==='/cart';
    return (

    <Container maxWidth={false} sx={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'}}>
        <Container disableGutters maxWidth={'xl'} sx={{display: 'flex', justifyContent:'space-between', pl:2, pr:2}} >
            {/* Left section: ECommerce link */}
            <Box display={'flex'} flexDirection={'row'}>
                {/* Left section: ECommerce link */}
                <Link href={'/'}>
                    <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} height={'100%'}>
                        <Typography variant="h4" fontWeight="bold">ECommerce</Typography>
                    </Box>
                </Link>
                {/* Center section: Products link */}
                <Link href="/">
                    <Box display={'flex'} justifyContent={'flex-center'} alignItems={'center'} height={'100%'}>
                        <MenuButton text="Ürünler"/>
                    </Box>
                </Link>
            </Box>
            {/* Right section: Shopping cart icon */}
            <Link href={isCartPage ? '/' : '/cart'} passHref>
                <Box display={'flex'} justifyContent={'flex-center'} alignItems={'center'} height={'100%'}>
                    <ShoppingCartButton isCartPage={isCartPage}/>
                </Box>
            </Link>
        </Container>
    </Container>
    );

}
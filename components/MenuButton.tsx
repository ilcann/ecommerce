'use client'

import { Button,Typography } from "@mui/material";

interface MenuButtonProps {
    text: string;
    onClick?: () => void; // onClick prop'u opsiyonel
}

const buttonStyle = {
    color: 'lightgray', // showCart true ise gri, false ise siyah
    '&:hover': {
      color: 'black', // Hover durumda yazı rengi siyah olacak
    },
    textTransform: 'none', // Yazının büyük harfe dönüşmemesini sağlıyor
    height:'100%',
    p:3,
}

export default function MenuButton({ text, onClick }: MenuButtonProps) {
    return (
        <Button
            onClick={onClick}
            sx={buttonStyle}
        >
            <Typography variant={'body1'} fontWeight={'bold'}>{text}</Typography>
        </Button>
    );
}
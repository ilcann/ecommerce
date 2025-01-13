import React from 'react';
import { Button, ButtonProps, Typography } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  variant?: 'contained' | 'outlined';
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<CustomButtonProps> = ({ variant = 'contained', text, onClick }) => {
  const commonStyles = {
    fullWidth: true,
    sx: {
      '&:hover': {
        backgroundColor: 'black',
        color: variant === 'outlined' ? 'white' : 'grey',
      },
      color: variant === 'outlined' ? 'black' : 'white',
      borderColor: 'black',
      fontWeight: 'bold',
      backgroundColor: variant === 'contained' ? 'black' : 'white',
    },
    onClick: onClick,
  };

  return (
    <Button variant={variant} {...commonStyles}>
      {text}
    </Button>
  );
};

interface MenuButtonProps {
  isCartPage: boolean;
  onClick?: () => void; // onClick prop'u opsiyonel
  text: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isCartPage, onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: isCartPage ? 'lightgray' : 'black', // showCart true ise gri, false ise siyah
        '&:hover': {
          color: 'black', // Hover durumda yazı rengi siyah olacak
        },
        textTransform: 'none', // Yazının büyük harfe dönüşmemesini sağlıyor
        height:'100%',
        p:3,
      }}
    >
      <Typography variant={'body1'} fontWeight={'bold'}>{text}</Typography>
    </Button>
  );
};

export {MenuButton, CustomButton};
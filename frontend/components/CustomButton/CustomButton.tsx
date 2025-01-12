import { Button, ButtonProps } from '@mui/material';

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

export default CustomButton;

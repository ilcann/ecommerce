import { Button, Card, CardMedia, CardContent, Typography} from "@mui/material";
import { IProduct } from "@/types";
import ProductCardPrice from "./ProductCardPrice";

const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
    return (
        <Card
            sx={{
             width: '100%',
             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Hafif ama şık bir gölge
             backgroundColor: '#fff',
             p: 2
             
            }} 
        >
            <CardMedia  component="img" src={product.thumbnail} sx={{pb: 2}}/>
            <CardContent sx={{p:0, pb:1}}>
                <Typography variant="h6" sx={{ fontWeight: "bold", pb: 0.5 }}>
                    {product.brand}
                </Typography>
                <Typography variant="body1" 
                    sx={{
                    display: "block",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    lineHeight: "1rem",
                    height: "2rem",
                    width: "100%",
                    whiteSpace: "normal",
                    fontWeight: 400,
                    }}>
                    {product.title}
                </Typography>
            </CardContent>
            <ProductCardPrice product={product}/>
            <Button
                variant="contained"
                color="primary"
                sx={{
                    width: '100%',
                    backgroundColor: 'black',
                    color: 'white',
                    '&:hover': {
                    backgroundColor: '#333',
                    },
                }}
            >
            Sepete Ekle
            </Button>
        </Card>
    )
}

export default ProductCard;
import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const Product = () => {
  const product = {
    name: 'Sample Product',
    description: 'This is a description of the sample product.',
    price: '$19.99',
    image: 'https://via.placeholder.com/150',
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            alt={product.name}
            height="140"
            image={product.image}
            title={product.name}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {product.price}
            </Typography>
            <Button size="small" variant="contained" color="primary">
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Product;

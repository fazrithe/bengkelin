import * as React from 'react';
import { Breadcrumbs, 
         Container, 
         Link, 
         Typography, 
         Stack,
         Grid,
         Hidden
        } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Detail from './items/Detail';
import BuyProduct from './items/BuyProduct';
import BuyProductMobile from './items/BuyProductMobile';
import GalleryProduct from './items/GalleryProduct'

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

export default function SingleProduct(props){
    const product = props?.product;
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={handleClick}
        >
          Aksesoris
        </Link>,
        <Typography key="3" color="text.primary">
          {product}
        </Typography>,
      ];
    
    return(
        <div>
            <Container fixed>
            <Stack spacing={2} className="mt-2">
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>  
            <Grid container spacing={1} className="mt-4">
              <Grid item xs={12} sm={4}>
                  {/* <GalleryProduct/> */}
              </Grid>
              <Grid item xs={12} sm={5}>
                  <Detail/>
              </Grid>
              <Grid item xs={8} sm={3}>
                <Hidden only="xs">
                  <BuyProduct/>
                </Hidden>
                <Hidden only={['sm', 'lg']}>
                  <BuyProductMobile />
                </Hidden>
              </Grid>
            </Grid>
            </Container></div>
    );
}
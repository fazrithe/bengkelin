import React from 'react';
import Carousel1 from './carousel/Carousel1'
import Carousel2 from './carousel/Carousel2'
import Carousel3 from './carousel/Carousel3'
import Carousel4 from './carousel/Carousel4'
import 'react-gallery-carousel/dist/index.css';
import { Grid } from '@mui/material';

const imageIDs = Array(5) // the maximum is currently 149
  .fill(1)
  .map((_, i) => i + 1);
const images = imageIDs.map((imageID) => {
  return {
    src: `https://placedog.net/400/240?id=${imageID}`,
    srcset: `https://placedog.net/400/240?id=${imageID} 400w, https://placedog.net/700/420?id=${imageID} 700w, https://placedog.net/1000/600?id=${imageID} 1000w`,
    sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
    alt: `Dog No. ${imageID}. Dogs are domesticated mammals, not natural wild animals.`,
    thumbnail: `https://placedog.net/100/60?id=${imageID}`
  };
});

function MyApp() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} padding={2}>
      <div className=''>
        <Carousel2 images={images} style={{ height: 200, width: 200 }}  />
      </div>
    </Grid>
    </Grid>
  );
}

export default MyApp;
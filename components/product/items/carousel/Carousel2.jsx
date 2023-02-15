import React from 'react';
import Carousel from 'react-gallery-carousel';

const Carousel2 = ({ images }) => {
  return (
    <section className='section' aria-labelledby='example2'>
      <div className=''>
        <Carousel images={images} />
      </div>
    </section>
  );
};

export default Carousel2;
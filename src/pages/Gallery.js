import React from 'react';

import Layout from '../layouts/Layout';
import GalleryImg from '../assets/images/family.jpg';
import GalleryCard from '../components/GalleryCard';

const Gallery = () => {
  return (
    <Layout header='gallery'>
      <div className='row'>
        <GalleryCard image={GalleryImg} />
        <GalleryCard image={GalleryImg} />
        <GalleryCard image={GalleryImg} />
        <GalleryCard image={GalleryImg} />
        <GalleryCard image={GalleryImg} />
      </div>
    </Layout>
  );
};

export default Gallery;

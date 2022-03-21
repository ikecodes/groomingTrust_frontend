import React, { useState } from 'react';

import Layout from '../layouts/Layout';
import GalleryImg from '../assets/images/family.jpg';
import GalleryCard from '../components/GalleryCard';

const Gallery = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <div className='spinner2'></div>;
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

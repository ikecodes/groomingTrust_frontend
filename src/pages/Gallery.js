import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import Layout from '../layouts/Layout';
import ImageGallery from 'react-image-gallery';

const GalleryC = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const IMAGES = gallery.map((item) => {
    return {
      original: item?.imageUrl,
      thumbnail: item?.imageUrl,
      description: item?.caption,
    };
  });

  useEffect(() => {
    setLoading(true);
    const galleryRef = collection(db, 'gallery');
    const q = query(galleryRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const gallery = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setGallery(gallery);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='gallery'>
      <div
        style={{
          display: 'block',
          minHeight: '1px',
          width: '100%',
          border: '1px solid #ddd',
          overflow: 'auto',
          textAlign: 'center',
          background: 'white',
        }}
      >
        {IMAGES.length > 0 && (
          <ImageGallery
            items={IMAGES}
            thumbnailPosition='top'
            showPlayButton={false}
            showBullets={true}
            showIndex={true}
          />
        )}
      </div>
    </Layout>
  );
};

export default GalleryC;

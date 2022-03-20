import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import PressCard from '../components/PressCard';
import Layout from '../layouts/Layout';

const Press = () => {
  const [press, setPress] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const pressRef = collection(db, 'press');
    const q = query(pressRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setPress(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='press'>
      <div className='row'>
        {press.length > 0 &&
          press.map((item) => (
            <PressCard
              key={item.id}
              id={item.id}
              date={item.date}
              image={item.imageUrl}
              title={item.title}
              link={item.link}
            />
          ))}
      </div>
    </Layout>
  );
};

export default Press;

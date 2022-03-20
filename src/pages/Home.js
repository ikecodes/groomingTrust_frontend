import React, { useState } from 'react';
import ChairmanMessage from '../components/ChairmanMessage';
import HomeBrands from '../components/HomeBrands';
import Events from '../components/HomeEvents';
import Grants from '../components/HomeGrants';
import Slider from '../components/Slider';
import Footer from '../layouts/Footer';

const Home = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <div className='spinner2'></div>;
  return (
    <div>
      <Slider />
      <ChairmanMessage />
      <Grants />
      <Events />
      <HomeBrands />
      <Footer />
    </div>
  );
};

export default Home;

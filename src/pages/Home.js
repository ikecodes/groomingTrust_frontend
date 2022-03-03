import React from 'react';
import ChairmanMessage from '../components/ChairmanMessage';
import HomeBrands from '../components/HomeBrands';
import Events from '../components/HomeEvents';
import Grants from '../components/HomeGrants';
import Slider from '../components/Slider';
import Footer from '../layouts/Footer';

const Home = () => {
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

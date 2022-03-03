import React from 'react';
import styled from 'styled-components';
import BrandImg from '../assets/images/brand.jpg';
import Section from '../layouts/Section';
const HomeBrands = () => {
  return (
    <Section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <ImageBox src={BrandImg} alt='brand' />
          </div>
          <div className='col-lg-3'>
            <ImageBox src={BrandImg} alt='brand' />
          </div>
          <div className='col-lg-3'>
            <ImageBox src={BrandImg} alt='brand' />
          </div>
          <div className='col-lg-3'>
            <ImageBox src={BrandImg} alt='brand' />
          </div>
        </div>
      </div>
    </Section>
  );
};

const ImageBox = styled.img`
  width: 100%;
  height: auto;
  background-size: cover;
`;
export default HomeBrands;

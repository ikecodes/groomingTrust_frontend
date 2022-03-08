import React from 'react';
import styled from 'styled-components';
import BrandImg from '../assets/images/brand.jpg';
import Section from '../layouts/Section';
const HomeBrands = () => {
  return (
    <Section>
      <div className='container text-center'>
        <div className='row justify-content-center'>
          <div className='col-lg-3 col-md-6'>
            <ImageBox src={BrandImg} alt='brand' />
          </div>
          <div className='col-lg-3 col-md-6'>
            <ImageBox src={BrandImg} alt='brand' />
          </div>
          <div className='col-lg-3 col-md-6'>
            <ImageBox src={BrandImg} alt='brand' />
          </div>
          <div className='col-lg-3 col-md-6'>
            <ImageBox src={BrandImg} alt='brand' />
          </div>
        </div>
      </div>
    </Section>
  );
};

const ImageBox = styled.img`
  width: 10rem;
  height: auto;
  background-size: cover;
`;
export default HomeBrands;

import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import BrandImg from '../assets/images/brand.jpg';
const HomeBrands = () => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.section`
  margin: 4rem 0;
  color: ${colors.textColor};
`;
const ImageBox = styled.img`
  width: 100%;
  height: auto;
  background-size: cover;
`;
export default HomeBrands;

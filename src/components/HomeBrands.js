import React from "react";
import styled from "styled-components";
import BrandImg1 from "../assets/images/partners/partner1.png";
import BrandImg2 from "../assets/images/partners/partner2.png";
import BrandImg3 from "../assets/images/partners/partner3.jpeg";
import colors from "../constants/colors";
import Section from "../layouts/Section";
const HomeBrands = () => {
  return (
    <Section>
      <div className='container'>
        <Header className='my-3'>our partners</Header>
        <div className='row text-center justify-content-center align-items-center mt-5'>
          <div className='col-lg-3 col-md-6 mb-5'>
            <a
              href='https://groomingcentre.org/'
              target='_blank'
              rel='noreferrer'
            >
              <ImageBox src={BrandImg1} alt='brand' />
            </a>
          </div>
          <div className='col-lg-3 col-md-6 mb-5'>
            <a href='https://fragginvest.com/' target='_blank' rel='noreferrer'>
              <ImageBox src={BrandImg2} alt='brand' />
            </a>
          </div>
          <div className='col-lg-3 col-md-6 mb-5'>
            <a
              href='https://konandassociatesfi.wixsite.com/my-site'
              target='_blank'
              rel='noreferrer'
            >
              <ImageBox src={BrandImg3} alt='brand' />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

const ImageBox = styled.img`
  width: 13rem;
  height: auto;
  background-size: cover;
  transition: all 0.5s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`;
const Header = styled.h1`
  color: ${colors.headerColor};
  text-transform: capitalize;
`;
export default HomeBrands;

import React from "react";
import styled from "styled-components";
import BrandImg1 from "../assets/images/partners/FRAGG-Logo.png";
import BrandImg2 from "../assets/images/partners/grooming centre.png";
import Section from "../layouts/Section";
const HomeBrands = () => {
  return (
    <Section>
      <div className='container text-center'>
        <div className='row justify-content-center'>
          <div className='col-lg-3 col-md-6 mb-3'>
            <ImageBox src={BrandImg1} alt='brand' />
          </div>
          <div className='col-lg-3 col-md-6 mb-3'>
            <ImageBox src={BrandImg2} alt='brand' />
          </div>
        </div>
      </div>
    </Section>
  );
};

const ImageBox = styled.img`
  width: 15rem;
  height: auto;
  background-size: cover;
`;
export default HomeBrands;

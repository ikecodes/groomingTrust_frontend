import React from "react";
import styled from "styled-components";
import brands from "../constants/brands";
import colors from "../constants/colors";
import Section from "../layouts/Section";
import BrandsCard from "./BrandsCard";
const HomeBrands = () => {
  return (
    <Section>
      <div className='container'>
        <Header className='my-3'>our partners</Header>
        <div className='row text-center justify-content-center align-items-center mt-5'>
          {brands.map((brand) => (
            <BrandsCard
              key={brand.id}
              image={brand.image}
              url={brand.url}
              width={brand.width}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

const Header = styled.h1`
  color: ${colors.headerColor};
  text-transform: capitalize;
`;

export default HomeBrands;

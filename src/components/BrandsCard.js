import React from "react";
import styled from "styled-components";

const BrandsCard = ({ image, url, width }) => {
  return (
    <div className='col-lg-3 col-md-6 mb-5'>
      <a href={url} target='_blank' rel='noreferrer'>
        <ImageBox src={image} alt='brand' width={width} />
      </a>
    </div>
  );
};
const ImageBox = styled.img`
  width: ${(props) => props.width};
  height: auto;
  background-size: cover;
  transition: all 0.5s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export default BrandsCard;

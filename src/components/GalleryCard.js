import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../constants/colors';
import Image from '../shared/Image';

const GalleryCard = ({ image }) => {
  return (
    <div className='col-lg-6 my-3'>
      <div className='position-relative'>
        <Image src={image} h={100} unit='%' />
        <Link to='/gallery-view'>
          <Tag>#Health talk week planning</Tag>
        </Link>
      </div>
    </div>
  );
};
const Tag = styled.h6`
  color: ${colors.textColor};
  margin: 0;
  padding: 0.5rem 1.5rem;
  text-transform: capitalize;
  text-align: center;
  position: absolute;
  background-color: ${colors.white};
  left: 50%;
  bottom: 0;
  white-space: nowrap;
  transform: translateX(-50%);
`;

export default GalleryCard;

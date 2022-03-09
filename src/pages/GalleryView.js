import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
import GalleryImg from '../assets/images/family.jpg';
import Image from '../shared/Image';

const GalleryImages = () => {
  return (
    <Layout>
      <div>
        <Tag>#Health talk 2022</Tag>
        <div className='row justify-content-center'>
          <div className='col-lg-8 mb-5'>
            <Image src={GalleryImg} h={100} unit='%' />
          </div>
        </div>
        <Carousel className='d-flex gap-2 gallery-carousel'>
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
          <Img src={GalleryImg} alt='' />
        </Carousel>
      </div>
    </Layout>
  );
};

const Tag = styled.h4`
  color: ${colors.textColor};
  margin: 0;
  padding: 0.5rem 1.5rem;
  text-transform: capitalize;
  text-align: center;
  background-color: ${colors.white};
  white-space: nowrap;
`;
const Carousel = styled.div`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 2px;
    height: 13px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: none;
    background-color: ${colors.overlay};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.tertiary};
    border-radius: 2rem;
    outline: none;
  }
`;
const Img = styled.img`
  height: 100px;
  width: 200px;
`;
export default GalleryImages;

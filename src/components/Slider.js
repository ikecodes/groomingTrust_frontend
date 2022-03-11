import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import NavLg from '../layouts/NavLg';
import NavSm from '../layouts/NavSm';
const Slider = () => {
  return (
    <div className='position-relative slider_container'>
      <NavSm />
      <NavLg />
      <Carousel>
        <Carousel.Item className='position-relative' interval={1000}>
          <div className='slider_image_box'>
            <div className='slider_overlay'></div>
            <img
              className='slider_image'
              src='https://picsum.photos/id/123/1200/600'
              alt='First slide'
            />
          </div>
          <Caption>
            <Carousel.Caption>
              <h1 className='text-start'>grooming trust</h1>
              <p className='text-start'>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Carousel.Caption>
          </Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className='slider_image_box'>
            <div className='slider_overlay'></div>
            <img
              className='slider_image'
              src='https://picsum.photos/id/456/1200/600'
              alt='Second slide'
            />
          </div>

          <Caption>
            <Carousel.Caption>
              <h1 className='text-start'>mission statement</h1>
              <p className='text-start'>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Carousel.Caption>
          </Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='slider_image_box'>
            <div className='slider_overlay'></div>
            <img
              className='slider_image'
              src='https://picsum.photos/id/678/1200/600'
              alt='Third slide'
            />
          </div>
          <Caption>
            <Carousel.Caption>
              <h1 className='text-start'>vision statement</h1>
              <p className='text-start'>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Carousel.Caption>
          </Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

const Caption = styled.div`
  & h1 {
    font-size: 3rem;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

export default Slider;

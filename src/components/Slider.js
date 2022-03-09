import React from 'react';
import { Carousel } from 'react-bootstrap';
import NavLg from '../layouts/NavLg';
import NavSm from '../layouts/NavSm';
const Slider = () => {
  return (
    <div className='position-relative slider_container'>
      <NavSm />
      <NavLg />
      <Carousel>
        <Carousel.Item interval={1000}>
          <div className='slider_image_box'>
            <div className='slider_overlay'></div>
            <img
              className='slider_image'
              src='https://picsum.photos/id/123/1200/600'
              alt='First slide'
            />
          </div>
          <Carousel.Caption>
            <h1>First slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              maxime modi a. Ipsa esse id sed possimus odio voluptatem,
              similique, maiores libero a mollitia quod vel consectetur
              perspiciatis voluptate? Temporibus.
            </p>
          </Carousel.Caption>
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

          <Carousel.Caption>
            <h1>Second slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              maxime modi a. Ipsa esse id sed possimus odio voluptatem,
              similique, maiores libero a mollitia quod vel consectetur
              perspiciatis voluptate? Temporibus.
            </p>
          </Carousel.Caption>
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
          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              maxime modi a. Ipsa esse id sed possimus odio voluptatem,
              similique, maiores libero a mollitia quod vel consectetur
              perspiciatis voluptate? Temporibus.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;

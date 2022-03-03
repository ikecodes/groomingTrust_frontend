import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../constants/colors';
import Logo from '../assets/images/logo-placeholder.png';
import Button from '../shared/Button';
const Footer = () => {
  return (
    <Container>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <ImageBox src={Logo} />
            <p className='pt-2'>
              No. 45 plot no be my area na klock area be this.
            </p>
          </div>
          <div className='col-lg-3'>
            <ul className='text-capitalize'>
              <li className='mb-2'>about us</li>
              <li className='my-2'>contact</li>
              <li className='my-2'>terms & condition</li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <ul className='text-capitalize'>
              <li className='mb-2 d-flex gap-3 align-items-center'>
                <FaFacebook size={20} />
                <span>facebook</span>
              </li>
              <li className='my-2 d-flex gap-3 align-items-center'>
                <FaTwitter size={20} />
                <span>twitter</span>
              </li>
              <li className='my-2 d-flex gap-3 align-items-center'>
                <FaInstagram size={20} />
                <span>instagram</span>
              </li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <p className='pb-2'>Subscribe to our newsletter</p>
            <div className='d-flex'>
              <Form.Control
                type='email'
                placeholder='Email'
                aria-describedby='Input your email'
              />

              <Button title='subscribe' primary />
            </div>
          </div>
        </div>
      </div>
      <div className='text-center text-capitalize'>
        <p className='m-0 py-3'>the grooming endownment &copy;2022 </p>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  margin-top: 4rem;
  padding-top: 5rem;
  color: ${colors.white};
  background-color: ${colors.tertiary};
`;

const ImageBox = styled.img`
  width: 10rem;
  height: auto;
  background-size: cover;
`;

export default Footer;

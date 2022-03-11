import React from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
import Button from '../shared/Button';
const Contact = () => {
  return (
    <Layout header='contact us'>
      <Container>
        <h1 className='my-3 text-capitalize'>we are here for you</h1>
        <p className='mb-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, neque
          accusantium perferendis est unde soluta magni? Dolor, provident quas!
          Quas totam distinctio veritatis hic pariatur tempora voluptas dolores
          nam saepe?
        </p>
        <ContactContainer className='row justify-content-center shadow-lg'>
          <ContactDetails className='col-lg-6 bg-light p-4 m-0 h-100'>
            <h2 className='text-capitalize m-0'>contact us</h2>
            <HeaderLine className='mb-1' />
            <p>We are open to any suggestion or just to have a chat</p>
            <ul className='mt-5'>
              <li className='mb-5 d-flex gap-3 align-items-center'>
                <MdLocationOn
                  size={30}
                  color={colors.primary}
                  className='flex-shrink-0'
                />
                <span>
                  Address:{' '}
                  <Detail>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit
                  </Detail>
                </span>
              </li>
              <li className='mb-5 d-flex gap-3 align-items-center'>
                <RiSendPlaneFill size={30} color={colors.primary} />
                <span>
                  Email: <Detail>example@gmail.com</Detail>
                </span>
              </li>
              <li className='mb-5 d-flex gap-3 align-items-center'>
                <BsTelephoneFill size={30} color={colors.primary} />
                <span>
                  Phone: <Detail>080354677797</Detail>
                </span>
              </li>
            </ul>
          </ContactDetails>
          <ContactForm className='col-lg-6 p-0'>
            <Form className='p-3 m-0'>
              <div className='mb-3 form-group'>
                <label htmlFor='name' className='form-label'>
                  Full name
                </label>
                <input
                  type='text'
                  name='name'
                  className='form-control rounded-0'
                  placeholder='Enter your name'
                />
              </div>
              <div className='mb-3 form-group'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  className='form-control rounded-0'
                  placeholder='Email Address'
                />
              </div>
              <div className='mb-3 form-group'>
                <label htmlFor='message' className='form-label'>
                  Message
                </label>
                <textarea
                  name='message'
                  cols='30'
                  rows='5'
                  className='form-control rounded-0 borded-0'
                  placeholder='Your message for us...'
                ></textarea>
              </div>
              <div className='text-start'>
                <Button primary title='submit' norounded />
              </div>
            </Form>
          </ContactForm>
        </ContactContainer>
      </Container>
    </Layout>
  );
};
const Container = styled.div`
  color: ${colors.textColor};
`;
const HeaderLine = styled.div`
  background-color: ${colors.primary};
  height: 0.2rem;
  width: 5rem;
  border-radius: 10px;
`;
const ContactContainer = styled.div`
  height: 100%;
`;

const ContactDetails = styled.div`
  /* background-color: ${colors.white}; */
  color: ${colors.textColor};
  height: 100%;
`;
const ContactForm = styled.div`
  background-color: ${colors.tertiary};
  background-image: linear-gradient(
    to top right,
    ${colors.tertiary},
    ${colors.primary}
  );
  color: ${colors.white};
  height: 100%;
`;

const Detail = styled.span`
  color: #696969;
`;

export default Contact;

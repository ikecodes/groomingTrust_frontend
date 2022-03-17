import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from '../shared/Button';
import Logo from '../assets/images/Logo.png';

const Login = () => {
  return (
    <FormContainer>
      <ContactForm className='p-5 rounded mx-3'>
        <Image src={Logo} alt='grooming' className='mb-5' />
        <Form className='m-0'>
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
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              name='password'
              className='form-control rounded-0'
              placeholder='Password'
            />
          </div>

          <div className='text-start'>
            <Button primary title='login' norounded />
          </div>
        </Form>
        <p>Input your email and password to login to the admin</p>
      </ContactForm>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 12rem;
  height: auto;
`;
const ContactForm = styled.div`
  background-color: ${colors.tertiary};
  background-image: linear-gradient(
    to top right,
    ${colors.tertiary},
    ${colors.primary}
  );
  color: ${colors.white};
  max-width: 600px;

  & p {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;
export default Login;

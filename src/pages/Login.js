import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from '../shared/Button';
import Logo from '../assets/images/Logo.png';

const Login = () => {
  return (
    <div className='container'>
      <FormContainer className='row justify-content-center'>
        <ContactForm className='col-lg-6 p-0'>
          <Image src={Logo} alt='' />
          <Form className='p-3 m-0'>
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
          <p className='text-center'>
            Input your email and password to login to the admin panel
          </p>
        </ContactForm>
      </FormContainer>
    </div>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100%;
`;
const Image = styled.img`
  width: 20rem;
  padding: 2rem;
  height: auto;
`;
const ContactForm = styled.div`
  /* width: 500px; */
  background-color: ${colors.tertiary};
  background-image: linear-gradient(
    to top right,
    ${colors.tertiary},
    ${colors.primary}
  );
  color: ${colors.white};
  height: 100%;
`;
export default Login;

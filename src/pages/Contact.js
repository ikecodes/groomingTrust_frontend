import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
import Button from '../shared/Button';
const Contact = () => {
  return (
    <Layout>
      <Container>
        <h2 className='my-3 text-capitalize'>we are here for you</h2>
        <p className='mb-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, neque
          accusantium perferendis est unde soluta magni? Dolor, provident quas!
          Quas totam distinctio veritatis hic pariatur tempora voluptas dolores
          nam saepe?
        </p>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <Form className='bg-light p-3 rounded'>
              <Form.Group className='mb-3' controlId='formGroupName'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Enter name' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formGroupEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formGroupMessage'>
                <Form.Label>Message</Form.Label>
                <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='5'
                  className='form-control'
                ></textarea>
              </Form.Group>
              <div className='text-end'>
                <Button primary title='submit' />
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
const Container = styled.div`
  color: ${colors.textColor};
`;

export default Contact;

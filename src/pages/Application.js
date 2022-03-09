import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
import Button from '../shared/Button';

const Application = () => {
  return (
    <Layout>
      <FormContainer>
        <form action=''>
          <div className='row mb-4'>
            <div className='col-lg-3 form-group'>
              <label htmlFor='title' className='form-label'>
                Title
              </label>
              <select
                class='form-select'
                id='title'
                aria-label='title'
                placeholder='Mr/Mrs'
              >
                <option selected>Title</option>
                <option value='1'>Mr</option>
                <option value='2'>Mrs</option>
              </select>
            </div>
          </div>
          <div className='row'>
            <label htmlFor='firstname' className='form-label'>
              Applicant's Name
            </label>
            <div className='col-lg-6 mb-4 form-group'>
              <input
                type='text'
                name='firstname'
                id=''
                className='form-control'
                placeholder='First Name'
              />
            </div>
            <div className='col-lg-6 mb-4 form-group'>
              <input
                type='text'
                name='lastname'
                id=''
                className='form-control'
                placeholder='Last Name'
              />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-lg-12 form-group '>
              <label htmlFor='dob' className='form-label'>
                Date of Birth
              </label>
              <input
                type='date'
                name='date'
                id='dob'
                className='form-control'
                placeholder='Date of Birth'
              />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-lg-12 form-group'>
              <label htmlFor='email' className='form-label'>
                Email Address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='form-control'
                placeholder='sample@email.com'
              />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-lg-12 form-group'>
              <label htmlFor='phone' className='form-label'>
                Phone Number
              </label>
              <input
                type='tel'
                name='phone'
                id='phone'
                className='form-control'
                placeholder='Phone Number'
              />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-lg-12 form-group'>
              <label htmlFor='address1' className='form-label'>
                Address Line 1
              </label>
              <input
                type='text'
                name='address1'
                id='address1'
                className='form-control'
                placeholder='Address 1'
              />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-lg-12 form-group'>
              <label htmlFor='address2' className='form-label'>
                Address Line 2
              </label>
              <input
                type='text'
                name='address'
                id='address2'
                className='form-control'
                placeholder='Address 2'
              />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-lg-12 form-group'>
              <label htmlFor='reason' className='form-label'>
                Describe your reason for applying for this grant
              </label>
              <textarea
                name='reason'
                id='reason'
                cols='30'
                rows='5'
                className='form-control'
              >
                Type...
              </textarea>
            </div>
          </div>
          <Button title='apply' primary />
        </form>
      </FormContainer>
    </Layout>
  );
};

const FormContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  color: ${colors.textColor}!important;
`;

export default Application;

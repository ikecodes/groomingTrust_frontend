import React from 'react';
import AdminLayout from '../layouts/AdminLayout';
import Button from '../shared/Button';

const AdminPortfolio = () => {
  return (
    <AdminLayout>
      <form className='p-2'>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='title' className='form-label'>
            Enter portfolio title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            className='form-control'
          />
        </div>
        <div className='mb-3 form-group w-75'>
          <label htmlFor='image' className='form-label'>
            Select portfolio image
          </label>
          <input type='file' name='image' id='image' className='form-control' />
        </div>
        <div className='mb-3 form-group'>
          <textarea
            name='text'
            id='text'
            cols='70'
            rows='5'
            placeholder='Portfolio text'
            className='bg-light p-2'
          ></textarea>
        </div>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='link' className='form-label'>
            Enter portfolio link
          </label>
          <input
            type='text'
            name='link'
            id='link'
            placeholder='link'
            className='form-control'
          />
        </div>
        <Button title='submit' />
      </form>
    </AdminLayout>
  );
};

export default AdminPortfolio;

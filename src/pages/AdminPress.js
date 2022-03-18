import React from 'react';
import AdminLayout from '../layouts/AdminLayout';
import Button from '../shared/Button';

const AdminPress = () => {
  return (
    <AdminLayout>
      <form className='p-2'>
        <p className='text-secondary text-center'>
          Date should be the date it was featured on the press
        </p>

        <div className='mb-3 form-group w-50'>
          <label htmlFor='date' className='form-label'>
            Enter date for press
          </label>
          <input
            type='date'
            name='date'
            placeholder='Date'
            className='form-control'
          />
        </div>

        <div className='mb-3 form-group w-50'>
          <label htmlFor='title' className='form-label'>
            Enter press title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            className='form-control'
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='link' className='form-label'>
            Enter link to press
          </label>
          <input
            type='text'
            name='link'
            id='link'
            placeholder='Link'
            className='form-control'
          />
        </div>

        <div className='mb-3 form-group w-75'>
          <label htmlFor='image' className='form-label'>
            Select press display image
          </label>
          <input type='file' name='image' id='image' className='form-control' />
        </div>

        <Button title='submit' />
      </form>
    </AdminLayout>
  );
};

export default AdminPress;

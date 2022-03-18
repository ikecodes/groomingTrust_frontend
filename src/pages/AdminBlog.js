import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import AdminLayout from '../layouts/AdminLayout';
import Button from '../shared/Button';

const AdminBlog = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <AdminLayout>
      <form className='p-2'>
        <p className='text-secondary text-center'>
          Blog date is automatically set to todays date
        </p>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='title' className='form-label'>
            Enter blog title
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
          <label htmlFor='author' className='form-label'>
            Enter blog author name
          </label>
          <input
            type='text'
            name='author'
            id='author'
            placeholder='Author'
            className='form-control'
          />
        </div>

        <div className='mb-3 form-group w-75'>
          <label htmlFor='image' className='form-label'>
            Select blog display image
          </label>
          <input type='file' name='image' id='image' className='form-control' />
        </div>
        <div className='mb-3 form-group'>
          <textarea
            name='text'
            id='text'
            cols='70'
            rows='5'
            placeholder='Preview text'
            className='bg-light p-2'
          ></textarea>
        </div>
        <div className='w-75'>
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue='<p>This is the initial content of the editor.</p>'
            init={{
              height: 300,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
          <button onClick={log}>Log editor content</button>
        </div>
        <Button title='submit' />
      </form>
    </AdminLayout>
  );
};

export default AdminBlog;

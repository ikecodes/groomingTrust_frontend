import React, { useState } from 'react';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase';
import { Editor } from '@tinymce/tinymce-react';
import Toast from '../utils/Toast';
import AdminLayout from '../layouts/AdminLayout';
import Button from '../shared/Button';

const AdminBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    image: '',
    description: '',
    body: '',
    imageRef: '',
    createdAt: Timestamp.now().toDate(),
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  const handleBodyChange = (text) => {
    setFormData({ ...formData, body: text });
  };

  const handlePublish = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.author ||
      !formData.image ||
      !formData.description ||
      !formData.body
    ) {
      Toast('Please fill all the fields', 'info');
      return;
    }

    setLoading(true);
    const imageRef = `/articles/${Date.now()}${formData.image.name}`;
    const storageRef = ref(storage, imageRef);

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      'state_changed',
      (snapshot) => {},
      (err) => {
        console.log(err);
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articlesRef = collection(db, 'articles');
          addDoc(articlesRef, {
            title: formData.title,
            author: formData.author,
            imageUrl: url,
            description: formData.description,
            body: formData.body,
            imageRef,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              Toast('Article added successfully', 'success');
              setLoading(false);
              setFormData({
                ...formData,
                title: '',
                author: '',
                description: '',
                body: '',
              });
            })
            .catch((err) => {
              Toast('Error adding article', 'error');
            });
        });
      }
    );
  };

  return (
    <AdminLayout>
      <form className='p-2' onSubmit={handlePublish}>
        <p className='text-secondary text-center'>
          Article date is automatically set to todays date
        </p>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='title' className='form-label'>
            Enter Article title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            className='form-control'
            value={formData.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='author' className='form-label'>
            Enter Article author name
          </label>
          <input
            type='text'
            name='author'
            id='author'
            placeholder='Author'
            className='form-control'
            value={formData.author}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className='mb-3 form-group w-50'>
          <label htmlFor='image' className='form-label'>
            Select Article display image
          </label>
          <input
            type='file'
            name='image'
            id='image'
            className='form-control'
            onChange={(e) => handleImageChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <textarea
            name='description'
            id='text'
            cols='60'
            rows='5'
            placeholder='Preview text'
            className='bg-light form-control'
            value={formData.description}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className='w-75'>
          <Editor
            apiKey='3i6uyqg8xp5acqtlcd6i6liqcwdfae67pkhixi393epj5ef1'
            textareaName='content'
            value={formData.body}
            init={{
              height: 300,
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
            onEditorChange={(text) => handleBodyChange(text)}
          />
        </div>
        <div className='mt-3'>
          <Button title='submit' primary disabled={loading} loading={loading} />
        </div>
      </form>
    </AdminLayout>
  );
};

export default AdminBlog;

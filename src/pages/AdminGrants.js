import React, { useState } from 'react';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase';
import { Editor } from '@tinymce/tinymce-react';
import Toast from '../utils/Toast';
import AdminLayout from '../layouts/AdminLayout';
import Button from '../shared/Button';

const AdminGrants = () => {
  const [formData, setFormData] = useState({
    title: '',
    deadline: '',
    image: '',
    description: '',
    body: '',
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
      !formData.deadline ||
      !formData.image ||
      !formData.description ||
      !formData.body
    ) {
      Toast('Please fill all the fields', 'info');
      return;
    }

    setLoading(true);
    const storageRef = ref(
      storage,
      `/grants/${Date.now()}${formData.image.name}`
    );

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
          const grantsRef = collection(db, 'grants');
          addDoc(grantsRef, {
            title: formData.title,
            deadline: formData.deadline,
            imageUrl: url,
            description: formData.description,
            body: formData.body,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              Toast('Grant added successfully', 'success');
              setLoading(false);
              setFormData({
                title: '',
                deadline: '',
                image: '',
                description: '',
                body: '',
              });
            })
            .catch((err) => {
              Toast('Error adding grant', 'error');
            });
        });
      }
    );
  };

  return (
    <AdminLayout>
      <form className='p-2' onSubmit={handlePublish}>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='title' className='form-label'>
            Enter grant title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            value={formData.title}
            placeholder='Title'
            className='form-control'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='deadline' className='form-label'>
            Enter deadline for grant application
          </label>
          <input
            type='date'
            name='deadline'
            id='deadline'
            value={formData.deadline}
            placeholder='Deadline'
            className='form-control'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-75'>
          <label htmlFor='image' className='form-label'>
            Select grant display image
          </label>
          <input
            type='file'
            name='image'
            id='image'
            accept='image/*'
            className='form-control'
            onChange={(e) => handleImageChange(e)}
          />
        </div>
        <div className='mb-3 form-group'>
          <textarea
            name='description'
            cols='70'
            rows='5'
            value={formData.description}
            placeholder='Preview text'
            className='bg-light p-2'
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className='w-75'>
          <Editor
            apiKey='3i6uyqg8xp5acqtlcd6i6liqcwdfae67pkhixi393epj5ef1'
            textareaName='content'
            initialValue={formData.body}
            init={{
              height: 300,
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

export default AdminGrants;

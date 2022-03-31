import React, { useState } from 'react';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase';
import Toast from '../utils/Toast';
import AdminLayout from '../layouts/AdminLayout';
import Button from '../shared/Button';

const AdminPress = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    image: '',
    link: '',
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

  const handlePublish = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.date ||
      !formData.image ||
      !formData.link
    ) {
      Toast('Please fill all the fields', 'info');
      return;
    }

    setLoading(true);
    const imageRef = `/press/${Date.now()}${formData.image.name}`;
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
          const pressRef = collection(db, 'press');
          addDoc(pressRef, {
            title: formData.title,
            date: formData.date,
            imageUrl: url,
            link: formData.link,
            imageRef,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              Toast('Press added successfully', 'success');
              setLoading(false);
              setFormData({
                ...formData,
                title: '',
                date: '',
                link: '',
              });
            })
            .catch((err) => {
              Toast('Error adding press', 'error');
            });
        });
      }
    );
  };
  return (
    <AdminLayout>
      <form className='p-2' onSubmit={handlePublish}>
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
            value={formData.date}
            onChange={(e) => handleChange(e)}
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
            value={formData.title}
            onChange={(e) => handleChange(e)}
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
            value={formData.link}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className='mb-3 form-group w-50'>
          <label htmlFor='image' className='form-label'>
            Select press display image
          </label>
          <input
            type='file'
            name='image'
            id='image'
            className='form-control'
            onChange={(e) => handleImageChange(e)}
          />
        </div>

        <div className='mt-3'>
          <Button title='submit' primary disabled={loading} loading={loading} />
        </div>
      </form>
    </AdminLayout>
  );
};

export default AdminPress;

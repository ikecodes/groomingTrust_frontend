import React, { useState } from 'react';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase';
import AdminLayout from '../layouts/AdminLayout';
import Toast from '../utils/Toast';
import Button from '../shared/Button';

const AdminGallery = () => {
  const [formData, setFormData] = useState({
    caption: '',
    image: '',
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
    if (!formData.caption || !formData.image) {
      Toast('Please fill all the fields', 'info');
      return;
    }
    setLoading(true);
    const storageRef = ref(
      storage,
      `/gallery/${Date.now()}${formData.image.name}`
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
          const galleryRef = collection(db, 'gallery');
          addDoc(galleryRef, {
            caption: formData.caption,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              Toast('Image successfully added to gallery', 'success');
              setLoading(false);
              setFormData({
                ...formData,
                caption: '',
              });
            })
            .catch((err) => {
              Toast('Error adding image to gallery', 'error');
            });
        });
      }
    );
  };
  return (
    <AdminLayout>
      <form className='p-2' onSubmit={handlePublish}>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='caption' className='form-label'>
            Add a caption for this image
          </label>
          <input
            type='text'
            name='caption'
            id='caption'
            className='form-control'
            placeholder='Caption'
            value={formData.caption}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-75'>
          <label htmlFor='image' className='form-label'>
            Select image to upload
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
        <div className='mt-3'>
          <Button title='submit' primary disabled={loading} loading={loading} />
        </div>
      </form>
    </AdminLayout>
  );
};

export default AdminGallery;

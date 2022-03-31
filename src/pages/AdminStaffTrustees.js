import React, { useState } from 'react';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase';
import AdminLayout from '../layouts/AdminLayout';
import Button from '../shared/Button';
import Toast from '../utils/Toast';

const AdminStaffTrustees = () => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    position: '',
    about: '',
    image: '',
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
      !formData.category ||
      !formData.name ||
      !formData.position ||
      !formData.about ||
      !formData.image
    ) {
      Toast('Please fill all the fields', 'info');
      return;
    }

    setLoading(true);
    const imageRef = `/${formData.category}/${Date.now()}${
      formData.image.name
    }`;
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
          const membersRef = collection(db, 'members');
          addDoc(membersRef, {
            category: formData.category,
            name: formData.name,
            position: formData.position,
            about: formData.about,
            imageUrl: url,
            imageRef,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              Toast('Member added successfully', 'success');
              setLoading(false);
              setFormData({
                ...formData,
                category: '',
                name: '',
                position: '',
                about: '',
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
        <div className='mb-3 form-group'>
          <label htmlFor='category' className='form-label'>
            Select category (Staff or Trustee)
          </label>
          <select
            name='category'
            className='form-control w-50'
            onChange={(e) => handleChange(e)}
            value={formData.category}
          >
            <option value=''>Category</option>
            <option value='staff'>Staff</option>
            <option value='trustee'>Trustee</option>
          </select>
        </div>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='name' className='form-label'>
            Name of Staff or Trustee
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='form-control'
            placeholder='Name'
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='position' className='form-label'>
            Position in Organisation
          </label>
          <input
            type='text'
            name='position'
            id='position'
            className='form-control'
            placeholder='Position'
            value={formData.position}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <textarea
            name='about'
            id='about'
            cols='70'
            rows='5'
            className='form-control'
            placeholder='About...'
            value={formData.about}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>

        <div className='mb-3 form-group w-50'>
          <label htmlFor='image' className='form-label'>
            Select Staff or Trustee Image
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

export default AdminStaffTrustees;

import React, { useEffect, useState } from 'react';
import {
  doc,
  onSnapshot,
  addDoc,
  collection,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useLocation } from 'react-router-dom';
import Toast from '../utils/Toast';
import styled from 'styled-components';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
import Button from '../shared/Button';

const Application = () => {
  const [grant, setGrant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    grantName: grant?.title,
    title: 'Mr',
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    reason: '',
    createdAt: Timestamp.now().toDate(),
  });
  const location = useLocation();
  const id = location.search.split('?')[1];

  useEffect(() => {
    setLoading(true);
    const grantsRef = doc(db, 'grants', id);
    const unsubscribe = onSnapshot(grantsRef, (doc) => {
      const grant = { ...doc.data(), id: doc.id };
      setGrant(grant);
      setLoading(false);
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.fullName ||
      !formData.dob ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.reason
    ) {
      Toast('Please fill all the fields', 'info');
      return;
    }

    setSending(true);
    const applicationsRef = collection(db, 'applications');
    addDoc(applicationsRef, {
      title: formData.title,
      grantName: grant?.title,
      fullName: formData.fullName,
      dob: formData.dob,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      reason: formData.reason,
      createdAt: Timestamp.now().toDate(),
    })
      .then(() => {
        setFormData({
          ...formData,
          fullName: '',
          email: '',
          message: '',
        });
        Toast('Application successfully submitted', 'success');
        setSending(false);
      })
      .catch((err) => {
        console.log(err);
        setSending(false);
        Toast('There was a problem sending your application', 'info');
      });
  };
  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='application'>
      <FormContainer>
        <FormHeader className='py-2'>{`${grant?.title} grants application`}</FormHeader>
        <form onSubmit={handleSubmit}>
          <div className='row mb-4'>
            <div className='col-lg-3 form-group'>
              <label htmlFor='title' className='form-label'>
                Title
              </label>
              <select
                className='form-select'
                id='title'
                name='title'
                aria-label='title'
                placeholder='Mr/Mrs'
              >
                <option value='1'>Mr</option>
                <option value='2'>Mrs</option>
              </select>
            </div>
          </div>
          <div className='row'>
            <label htmlFor='fullName' className='form-label'>
              Applicant's Full Name
            </label>
            <div className='col-lg-12 mb-4 form-group'>
              <input
                type='text'
                name='fullName'
                id=''
                className='form-control'
                placeholder='Full Name'
                onChange={(e) => handleChange(e)}
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
                name='dob'
                id='dob'
                className='form-control'
                placeholder='Date of Birth'
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-lg-12 form-group'>
              <label htmlFor='address' className='form-label'>
                Address Line 1
              </label>
              <input
                type='text'
                name='address'
                id='address'
                className='form-control'
                placeholder='Address'
                onChange={(e) => handleChange(e)}
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
                placeholder='Type...'
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
          </div>
          <Button title='apply' primary disabled={sending} loading={sending} />
        </form>
      </FormContainer>
    </Layout>
  );
};

const FormHeader = styled.h4`
  background-color: ${colors.overlay};
  color: ${colors.white};
  text-transform: capitalize;
  text-align: center;
`;
const FormContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  color: ${colors.textColor}!important;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Application;

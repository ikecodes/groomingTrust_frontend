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
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    grantName: grant?.title,
    title: 'Mr',
    firstName: '',
    lastName: '',
    email: '',
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
      !formData.firstName ||
      !formData.lastName ||
      !formData.email
    ) {
      Toast('Please fill all the fields', 'info');
      return;
    }
    setSending(true);
    const applicationsRef = collection(db, 'applications');
    addDoc(applicationsRef, {
      title: formData.title,
      grantName: grant?.title,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      createdAt: Timestamp.now().toDate(),
    })
      .then(() => {
        setFormData({
          ...formData,
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        });
        Toast('Details successfully submitted', 'success');
        setSending(false);
        setSuccess(true);
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
        {success ? (
          <div>
            <h6>
              You have not successfully registered for this grant, please click
              on the button below and proceed to take our test. Please Ensure
              you only do once.
            </h6>
            <div className='mt-3'>
              <a href={grant?.link} target='_blank' rel='noreferrer'>
                <Button title='take test' primary />
              </a>
            </div>
          </div>
        ) : (
          <>
            {' '}
            <FormHeader className='py-2'>{`${grant?.title} grants application`}</FormHeader>
            <form className='mt-5' onSubmit={handleSubmit}>
              <div className='row mb-4 justify-content-center'>
                <div className='col-lg-3 form-group'>
                  {/* <label htmlFor='title' className='form-label'>
                Title
              </label> */}
                  <select
                    className='form-select'
                    id='title'
                    name='title'
                    aria-label='title'
                    placeholder='Mr/Mrs'
                  >
                    <option value='1'>Title</option>
                    <option value='2'>Mr</option>
                    <option value='3'>Mrs</option>
                  </select>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6 mb-4 form-group'>
                  <label htmlFor='firstName' className='form-label'>
                    First Name
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    className='form-control'
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className='col-lg-6 mb-4 form-group'>
                  <label htmlFor='lastName' className='form-label'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    className='form-control'
                    value={formData.lastName}
                    placeholder='Last Name'
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12 mb-4 form-group'>
                  <label htmlFor='email' className='form-label'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='form-control'
                    value={formData.email}
                    placeholder='sample@email.com'
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className='text-center'>
                <Button
                  title='register for this grant'
                  primary
                  disabled={sending}
                  loading={sending}
                />
              </div>
            </form>
          </>
        )}
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
// const Terms = styled.div`
//   & ul {
//     list-style: decimal;
//   }
// `;

export default Application;

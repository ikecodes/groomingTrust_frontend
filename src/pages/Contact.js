import React, { useState } from "react";
import { addDoc, Timestamp, collection } from "firebase/firestore";
import { db } from "../firebase";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import colors from "../constants/colors";
import Layout from "../layouts/Layout";
import Button from "../shared/Button";
import Toast from "../utils/Toast";
const Contact = () => {
  const [loading, setloading] = useState(true);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    createdAt: Timestamp.now().toDate(),
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      Toast("Please fill all the fields", "info");
      return;
    }
    setSending(true);
    const messageRef = collection(db, "messages");
    addDoc(messageRef, {
      fullName: formData.fullName,
      email: formData.email,
      message: formData.message,
      createdAt: Timestamp.now().toDate(),
    })
      .then(() => {
        setFormData({
          ...formData,
          fullName: "",
          email: "",
          message: "",
        });
        Toast("Message sent successfully", "success");
        setSending(false);
      })
      .catch((err) => {
        console.log(err);
        setSending(false);
        Toast("There was a problem sending you message", "info");
      });
  };

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='contact us'>
      <Container>
        <h1 className='my-3 text-capitalize'>we are here for you</h1>
        {/* <p className='mb-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, neque
          accusantium perferendis est unde soluta magni? Dolor, provident quas!
          Quas totam distinctio veritatis hic pariatur tempora voluptas dolores
          nam saepe?
        </p> */}
        <ContactContainer className='row justify-content-center shadow-lg'>
          <ContactDetails className='col-lg-6 bg-light p-4 m-0 h-100'>
            <h2 className='text-capitalize m-0'>contact us</h2>
            <HeaderLine className='mb-1' />
            <p>We are open to any suggestion or just to have a chat</p>
            <ul className='mt-5'>
              <li className='mb-5 d-flex gap-3 align-items-center'>
                <MdLocationOn
                  size={30}
                  color={colors.primary}
                  className='flex-shrink-0'
                />
                <span>
                  Address: <Detail>120 Ikotun Egbe Road, Ejigbo, Lagos</Detail>
                </span>
              </li>
              <li className='mb-5 d-flex gap-3 align-items-center'>
                <RiSendPlaneFill size={30} color={colors.primary} />
                <span>
                  Email: <Detail>Getinfo@groomingendowment.org</Detail>
                </span>
              </li>
              <li className='mb-5 d-flex gap-3 align-items-center'>
                <BsTelephoneFill size={30} color={colors.primary} />
                <span>
                  Phone: <Detail>+234 9087966322, +234 9021273383</Detail>
                </span>
              </li>
            </ul>
          </ContactDetails>
          <ContactForm className='col-lg-6 p-0'>
            <Form className='p-3 m-0' onSubmit={handleSubmit}>
              <div className='mb-3 form-group'>
                <label htmlFor='fullName' className='form-label'>
                  Full name
                </label>
                <input
                  type='text'
                  name='fullName'
                  className='form-control rounded-0'
                  placeholder='Enter your name'
                  value={formData.fullName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className='mb-3 form-group'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  className='form-control rounded-0'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className='mb-3 form-group'>
                <label htmlFor='message' className='form-label'>
                  Message
                </label>
                <textarea
                  name='message'
                  cols='30'
                  rows='5'
                  className='form-control rounded-0 borded-0'
                  placeholder='Your message for us...'
                  value={formData.message}
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
              <div className='text-start'>
                <Button
                  primary
                  title='submit'
                  norounded
                  disabled={sending}
                  loading={sending}
                />
              </div>
            </Form>
          </ContactForm>
        </ContactContainer>
      </Container>
    </Layout>
  );
};
const Container = styled.div`
  color: ${colors.textColor};
`;
const HeaderLine = styled.div`
  background-color: ${colors.primary};
  height: 0.2rem;
  width: 5rem;
  border-radius: 10px;
`;
const ContactContainer = styled.div`
  height: 100%;
`;

const ContactDetails = styled.div`
  /* background-color: ${colors.white}; */
  color: ${colors.textColor};
  height: 100%;
`;
const ContactForm = styled.div`
  background-color: ${colors.tertiary};
  background-image: linear-gradient(
    to top right,
    ${colors.tertiary},
    ${colors.primary}
  );
  color: ${colors.white};
  height: 100%;
`;

const Detail = styled.span`
  color: #696969;
`;

export default Contact;

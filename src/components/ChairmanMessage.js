import React from 'react';
import { Link } from 'react-router-dom';
import ChairmanImage from '../assets/images/chairman.jpg';
import PrimaryButton from '../shared/Button';
import Section from '../layouts/Section';
import Image from '../shared/Image';
const ChairmanMessage = () => {
  return (
    <Section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <Image
              src={ChairmanImage}
              alt='chairman'
              h={100}
              unit='%'
              rounded
            />
          </div>
          <div className='col-lg-6'>
            <h2 className='my-3'>Chairman's message</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              deleniti corporis dolor sint? Qui animi doloremque, necessitatibus
              ipsa sequi at corporis ut, deleniti voluptatibus quis nam
              distinctio blanditiis magni vitae?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              cumque iusto cupiditate aliquam. Iusto quae quos mollitia omnis
              quod id quasi voluptates optio debitis ducimus, eos odit fugiat
              commodi voluptatem.
            </p>
            <Link to='/chairmans-message'>
              <PrimaryButton title='read more' primary />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ChairmanMessage;

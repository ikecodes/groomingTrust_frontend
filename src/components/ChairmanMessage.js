import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import ChairmanImage from '../assets/images/chairman.jpg';
import PrimaryButton from './shared/Button';
const ChairmanMessage = () => {
  return (
    <Container>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <ImageBox src={ChairmanImage} alt='chairman' />
          </div>
          <div className='col-lg-6'>
            <h1>Chairman's message</h1>
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
            <PrimaryButton title='read more' primary />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  margin: 4rem 0;
  color: ${colors.textColor};
`;
const ImageBox = styled.img`
  border-radius: 2rem;
  width: 100%;
  height: auto;
  background-size: cover;
`;
export default ChairmanMessage;

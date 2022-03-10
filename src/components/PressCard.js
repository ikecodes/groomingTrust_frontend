import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from '../shared/Button';
import SunImg from '../assets/images/sun.png';

const PressCard = () => {
  return (
    <div className='col-lg-12 mb-3'>
      <CardContainer className='p-3 d-flex justify-content-around'>
        <div className='pl-3'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <Button title='dec 1 2021' primary />
        </div>

        <Image src={SunImg} alt='press' />
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  background-color: ${colors.grey};
`;

const Image = styled.img`
  width: 10rem;
  height: 5rem;
`;
export default PressCard;

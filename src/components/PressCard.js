import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from '../shared/Button';
import moment from 'moment';

const PressCard = ({ id, date, image, title, link }) => {
  return (
    <div className='col-lg-12 mb-3'>
      <CardContainer className='p-3 row gap-2 flex-md-row-reverse justify-content-between'>
        <div className='col-lg-3'>
          <Image src={image} alt='press' />
        </div>
        <div className='col-lg-7'>
          <div className='pl-3'>
            <h6>{title}</h6>
            <p className='text-secondary'>
              {moment(date).format('MMM Do YYYY')}
            </p>
            <a href={link} target='_blank' rel='noreferrer'>
              <Button title='View' primary />
            </a>
          </div>
        </div>
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

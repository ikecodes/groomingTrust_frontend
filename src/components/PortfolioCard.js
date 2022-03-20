import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from '../shared/Button';
const PortfolioCard = ({ id, title, image, description, link }) => {
  return (
    <div className='col-lg-4 col-md-6 mb-5'>
      <CardContainer>
        <Card className='border-0 bg-transparent'>
          <CardImage alt='event' src={image} />
          <Card.Body>
            <Card.Title className='text-capitalize'>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <a href={link} target='_blank' rel='noreferrer'>
              <Button title='learn more' primary />
            </a>
          </Card.Body>
        </Card>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  background-color: ${colors.grey};
  padding: 1rem;
  border-radius: 1rem;
`;
const CardImage = styled.img`
  /* border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem; */
`;

export default PortfolioCard;

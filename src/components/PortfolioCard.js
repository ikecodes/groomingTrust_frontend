import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import EventImg from '../assets/images/event.jpg';
import colors from '../constants/colors';
import Button from '../shared/Button';
const PortfolioCard = () => {
  return (
    <div className='col-lg-4 col-md-6 mb-5'>
      <CardContainer>
        <Card className='border-0 bg-transparent'>
          <CardImage alt='event' src={EventImg} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button title='learn more' primary />
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

import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import EventImg from '../assets/images/event.jpg';

const EventsCard = () => {
  return (
    <div className='col-lg-4 mb-3'>
      <CardContainer className='shadow-lg'>
        <Card>
          <CardImage className='rounded-botton' alt='' src={EventImg} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  border-radius: 1rem;
  overflow: hidden;
`;
const CardImage = styled.img`
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;
export default EventsCard;

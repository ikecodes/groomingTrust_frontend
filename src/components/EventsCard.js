import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import EventImg from '../assets/images/event.jpg';
import Button from '../shared/Button';
import { Slide } from 'react-reveal';

const EventsCard = () => {
  return (
    <Slide bottom>
      <div className='col-lg-4 col-md-6 mb-5'>
        <CardContainer className='shadow-lg'>
          <Card>
            <CardImage alt='event' src={EventImg} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button title='read more' />
            </Card.Body>
          </Card>
        </CardContainer>
      </div>
    </Slide>
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

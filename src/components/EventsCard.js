import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import Button from '../shared/Button';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const EventsCard = ({ id, title, image, author, createdAt, description }) => {
  return (
    <Fade bottom>
      <div className='col-lg-4 col-md-6 mb-5'>
        <CardContainer className='shadow-lg'>
          <Card>
            <CardImage alt='event' src={image} />
            <Card.Body>
              <Card.Title className='text-capitalize'>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Link to={`/blog-view?${id}`}>
                <Button title='read more' />
              </Link>
            </Card.Body>
          </Card>
        </CardContainer>
      </div>
    </Fade>
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

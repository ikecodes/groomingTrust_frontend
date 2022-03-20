import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EventImg from '../assets/images/event.jpg';
import colors from '../constants/colors';
import Button from '../shared/Button';

const BlogCard = ({ id, title, image, author, createdAt, description }) => {
  return (
    <div className='col-lg-4 col-md-6 mb-5'>
      <CardContainer>
        <Card className='border-0 bg-transparent'>
          <Card.Title className='my-3 text-capitalize fw-bolder fs-6'>
            {title}
          </Card.Title>
          <Card.Text className='border-bottom pb-3 fw-light text-capitalize'>
            {author} |{' '}
            {new Date(createdAt.seconds * 1000).toLocaleDateString('en-US')}
          </Card.Text>
          <CardImage alt='event' src={EventImg} />
          <Card.Body>
            <Card.Text>{description}</Card.Text>
            <Link to={`/blog-view?${id}`}>
              <Button title='read more' norounded />
            </Link>
          </Card.Body>
        </Card>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  background-color: ${colors.grey};
  padding: 1rem 1rem;
`;
const CardImage = styled.img`
  /* border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem; */
`;

export default BlogCard;

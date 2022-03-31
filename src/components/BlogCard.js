import React from 'react';
import { deleteDocWithImage } from '../firebase';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from '../shared/Button';

const BlogCard = ({
  id,
  title,
  image,
  author,
  createdAt,
  description,
  imageRef,
}) => {
  const admin = localStorage.getItem('admin');
  const handleDelete = async () => {
    await deleteDocWithImage(imageRef, 'articles', id);
  };
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
          <CardImage alt='event' src={image} />
          <Card.Body>
            <Card.Text>{description}</Card.Text>
            <Link to={`/blog-view?${id}`}>
              <Button title='read more' norounded />
            </Link>
          </Card.Body>
        </Card>
        {admin && (
          <FaRegTrashAlt
            role='button'
            className='mt-3 text-danger'
            size={25}
            onClick={handleDelete}
          />
        )}
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

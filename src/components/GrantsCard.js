import React from 'react';
import { deleteDocWithImage } from '../firebase';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from '../shared/Button';
import Image from '../shared/Image';
import { Fade } from 'react-reveal';

const GrantsCard = ({ id, title, description, image, imageRef }) => {
  const admin = localStorage.getItem('admin');
  const handleDelete = async () => {
    deleteDocWithImage(imageRef, 'grants', id);
  };

  return (
    <div className='row my-5 flex-md-row-reverse'>
      <Fade left>
        <div className='col-lg-6'>
          <Image src={image} alt='family' h={100} unit='%' />
        </div>
        <div className='col-lg-6'>
          <Container>
            <h2 className='my-3 text-capitalize'>{title}</h2>
            {description}
            <div className='mt-3'>
              <Link to={`/grants-view?${id}`}>
                <Button title='learn more' primary />
              </Link>
            </div>
          </Container>
          {admin && (
            <FaRegTrashAlt
              role='button'
              className='mt-3 text-danger'
              size={25}
              onClick={handleDelete}
            />
          )}
        </div>
      </Fade>
    </div>
  );
};

const Container = styled.div`
  border-left: 1px solid ${colors.textColor};
  padding-left: 1.5rem;
`;
export default GrantsCard;

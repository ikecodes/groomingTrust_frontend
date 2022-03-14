import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
import Button from '../shared/Button';

const GrantsView = () => {
  return (
    <Layout header='grants'>
      <Container>
        <h1 className='my-3 text-capitalize'>
          apply for child and family well-being grants
        </h1>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic delectus
          totam debitis corrupti ipsa sunt accusantium pariatur, autem similique
          explicabo quos, eius laborum. Vero neque quidem in quasi! Architecto,
          sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
          consectetur tempora in dolorem minima doloremque assumenda nesciunt
          dignissimos, ea a reiciendis, dolore ullam molestias iure ratione
          rerum? Architecto, cupiditate provident. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Hic delectus totam debitis corrupti ipsa
          sunt accusantium pariatur, autem similique explicabo quos, eius
          laborum. Vero neque quidem in quasi! Architecto, sit. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Quo consectetur tempora
          in dolorem minima doloremque assumenda nesciunt dignissimos, ea a
          reiciendis, dolore ullam molestias iure ratione rerum? Architecto,
          cupiditate provident. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Hic delectus totam debitis corrupti ipsa sunt
        </div>
        <div className='mt-3 text-capitalize'>
          <Deadline className='p-1 rounded'>application deadline</Deadline>
          <p className='mt-2'>22nd January, 2022</p>
        </div>
        <div className='text-center mt-5'>
          <Link to='/application'>
            <Button title='apply now' primary />
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  color: ${colors.textColor};
`;

const Deadline = styled.span`
  color: ${colors.white};
  background-color: ${colors.overlay};
`;
export default GrantsView;

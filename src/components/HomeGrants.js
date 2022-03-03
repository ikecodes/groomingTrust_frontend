import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from '../shared/Button';
import GrantsCard from './GrantsCard';

const Grants = () => {
  return (
    <Container>
      <div className='container'>
        <Header className='my-3'>grants</Header>
        <GrantsCard />
        <GrantsCard />
      </div>
      <div className='d-flex justify-content-center'>
        <Button title='see more' />
      </div>
    </Container>
  );
};

const Container = styled.section`
  margin: 7rem 0;
  color: ${colors.textColor};
`;

const Header = styled.h1`
  color: ${colors.headerColor};
  text-transform: capitalize;
`;
export default Grants;

import React from 'react';
import styled from 'styled-components';
import GrantsCard from '../components/GrantsCard';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';

const Grants = () => {
  return (
    <Layout header='grants'>
      <Container>
        <h1 className='text-capitalize my-3'>apply for a grant</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit tempora rerum esse dolore. Aut est sapiente asperiores
          ab aliquam molestias consectetur autem accusantium doloribus dolorum
          vitae tempora cupiditate, dolores quisquam.
        </p>
        <div>
          <GrantsCard />
          <GrantsCard />
          <GrantsCard />
        </div>
        <h4 className='text-capitalize my-3'>guidelines for application</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit tempora rerum esse dolore. Aut est sapiente asperiores
          ab aliquam molestias consectetur autem accusantium doloribus dolorum
          vitae tempora cupiditate, dolores quisquam.
        </p>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  color: ${colors.textColor};
`;
export default Grants;

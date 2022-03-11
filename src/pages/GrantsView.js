import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
import Button from '../shared/Button';

const GrantsView = () => {
  return (
    <Layout header='grants'>
      <Container>
        <h2 className='my-3 text-capitalize'>
          apply for child and family well-being grants
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic delectus
          totam debitis corrupti ipsa sunt accusantium pariatur, autem similique
          explicabo quos, eius laborum. Vero neque quidem in quasi! Architecto,
          sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
          consectetur tempora in dolorem minima doloremque assumenda nesciunt
          dignissimos, ea a reiciendis, dolore ullam molestias iure ratione
          rerum? Architecto, cupiditate provident.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          quidem accusantium deleniti consectetur omnis sit quo deserunt in hic,
          dolore non laborum aperiam amet ipsam, dolor dicta, obcaecati earum
          est.
        </p>
        <Button title='apply' primary />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  color: ${colors.textColor};
`;
export default GrantsView;

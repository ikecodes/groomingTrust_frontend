import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import EventsCard from './EventsCard';

const Events = () => {
  return (
    <Container>
      <div className='container'>
        <Header className='my-3'>events</Header>
        <div className='row'>
          <EventsCard />
          <EventsCard />
          <EventsCard />
        </div>
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
export default Events;

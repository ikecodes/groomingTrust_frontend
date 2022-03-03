import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import Section from '../layouts/Section';
import EventsCard from './EventsCard';

const Events = () => {
  return (
    <Section>
      <div className='container'>
        <Header className='my-3'>events</Header>
        <div className='row'>
          <EventsCard />
          <EventsCard />
          <EventsCard />
        </div>
      </div>
    </Section>
  );
};

const Header = styled.h1`
  color: ${colors.headerColor};
  text-transform: capitalize;
`;
export default Events;

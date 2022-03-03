import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
const Section = ({ children }) => {
  return <Container>{children}</Container>;
};
const Container = styled.section`
  margin: 5rem 0;
  color: ${colors.textColor};
`;
export default Section;

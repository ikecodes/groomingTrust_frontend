import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
const Button = ({ title, primary, handleClick }) => {
  return (
    <B primary={primary} onClick={handleClick}>
      {title}
    </B>
  );
};

const B = styled.button`
  background-color: ${(props) =>
    props.primary ? colors.primary : colors.tertiary};
  text-transform: capitalize;
  color: ${colors.white};
  padding: 4px 15px;
  border-radius: 5px;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.05);
  }
`;
export default Button;

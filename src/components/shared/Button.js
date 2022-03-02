import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
const ButtonComponent = ({ title, primary }) => {
  return <Button primary={primary}>{title}</Button>;
};

const Button = styled.button`
  background-color: ${(props) =>
    props.primary ? colors.primary : colors.tertiary};
  text-transform: capitalize;
  color: #fff;
  padding: 4px 15px;
  border-radius: 5px;
`;
export default ButtonComponent;

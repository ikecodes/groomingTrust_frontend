import React from 'react';
import styled from 'styled-components';
const NavItemLg = ({ name }) => {
  return <NavItem className='mx-5'>{name}</NavItem>;
};

const NavItem = styled.li`
  color: #fff;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
`;

export default NavItemLg;

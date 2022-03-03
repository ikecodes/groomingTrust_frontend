import React, { useState } from 'react';
import colors from '../constants/colors';
import styled from 'styled-components';
const NavItemLg = ({ name }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className='position-relative'
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <NavItem>{name}</NavItem>
      {show && (
        <ContainerMenu>
          <ContainerItem className='my-3'>grooming endownment</ContainerItem>
          <ContainerItem className='my-3'>staff and trusties</ContainerItem>
          <ContainerItem className='my-3'>gallery</ContainerItem>
        </ContainerMenu>
      )}
    </div>
  );
};

const NavItem = styled.li`
  color: ${colors.white};
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: ${colors.primary}; // <Thing> when hovered
  }
`;
const ContainerMenu = styled.ul`
  position: absolute;
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 1.2rem;
  left: -50%;
`;
const ContainerItem = styled.li`
  white-space: nowrap;
  font-size: 0.8rem;
  text-transform: capitalize;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${colors.primary}; // <Thing> when hovered
  }
`;
export default NavItemLg;

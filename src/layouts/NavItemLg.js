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
      <ContainerMenu className={`p-3 ${show ? 'hovered' : ''}`}>
        <ContainerItem className='my-3'>grooming endownment</ContainerItem>
        <ContainerItem className='my-3'>staff and trusties</ContainerItem>
        <ContainerItem className='my-3'>gallery</ContainerItem>
      </ContainerMenu>
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
  left: -50%;
  visibility: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease-in;
  &.hovered {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;
const ContainerItem = styled.li`
  white-space: nowrap;
  font-size: 0.9rem;
  text-transform: capitalize;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${colors.primary}; // <Thing> when hovered
  }
`;
export default NavItemLg;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import colors from '../constants/colors';
import styled from 'styled-components';
const NavItemLg = ({ menu }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className='position-relative'
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <NavItem>
        <Link to={menu.path}>{menu.name}</Link>
      </NavItem>
      {menu.sub.length > 0 && (
        <ContainerMenu className={`p-3 ${show ? 'hovered' : ''}`}>
          {menu.sub.map((item) => (
            <ContainerItem className='my-3' key={item.id}>
              <Link to={item.path}>{item.name}</Link>
            </ContainerItem>
          ))}
        </ContainerMenu>
      )}
    </div>
  );
};

const NavItem = styled.li`
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  & a {
    color: ${colors.white};
    text-decoration: none;
  }
  & a:hover,
  a:active {
    color: ${colors.primary}; // <Thing> when hovered
  }
`;
const ContainerMenu = styled.ul`
  position: absolute;
  z-index: 100;
  width: 170px;
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
  & a {
    color: ${colors.black};
    text-decoration: none;
  }
  & a:hover,
  a:active {
    color: ${colors.primary}; // <Thing> when hovered
  }
`;
export default NavItemLg;

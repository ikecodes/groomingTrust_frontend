import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo-placeholder.png';
import NavItemLg from './NavItemLg';

const NavbarLg = () => {
  return (
    <NavContainer className='position-absolute  d-flex justify-content-around align-items-center mt-3'>
      <Image src={Logo} />
      <ul className='d-flex justify-content-around align-items-center'>
        <NavItemLg name='about' />
        <NavItemLg name='portfolio' />
        <NavItemLg name='grants' />
        <NavItemLg name='news' />
      </ul>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  z-index: 100;
`;
const Image = styled.img`
  height: 5rem;
  width: 5rem;
`;

export default NavbarLg;

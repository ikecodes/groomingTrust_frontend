import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import colors from '../constants/colors';

const NavSm = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <>
      <AnimatingContainer>
        <MenuIcon open onClick={() => setIsAnimating(true)}>
          <BiMenuAltLeft size={30} color={colors.white} />
        </MenuIcon>
        <NavContainer>
          <div className='ms-4'>
            <Heading>about</Heading>
            <ul>
              <li>grooming endownment</li>
              <li>staff and trusties</li>
              <li>gallery</li>
              <li>faq</li>
            </ul>
          </div>
          <div className='ms-4'>
            <Heading>portfolio</Heading>
            <ul>
              <li>grooming endownment</li>
              <li>staff and trusties</li>
              <li>gallery</li>
              <li>faq</li>
            </ul>
          </div>
        </NavContainer>
        <MenuIcon close onClick={() => setIsAnimating(false)}>
          <FaTimes size={30} color={colors.white} />
        </MenuIcon>
      </AnimatingContainer>
    </>
  );
};

const MenuIcon = styled.span`
  position: absolute;
  top: 1rem;
  z-index: ${(props) => (props.open ? 90 : 100)};
  right: 2rem;
`;

const AnimatingContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const NavContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.secondary};
  position: absolute;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  z-index: 100;
  gap: 0.5rem;
`;
const Heading = styled.h4`
  color: ${colors.tertiary};
  text-transform: uppercase;
  font-weight: bold;
`;
export default NavSm;

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
      <OpenIcon onClick={() => setIsAnimating(true)}>
        <BiMenuAltLeft size={30} color={colors.white} />
      </OpenIcon>
      <AnimatingContainer
        className={isAnimating ? 'clicked' : ''}
        onClick={() => setIsAnimating(false)}
      >
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
          <CloseIcon onClick={() => setIsAnimating(false)}>
            <FaTimes size={30} color={colors.white} />
          </CloseIcon>
        </NavContainer>
      </AnimatingContainer>
    </>
  );
};

const OpenIcon = styled.span`
  position: absolute;
  top: 1rem;
  z-index: 100;
  right: 2rem;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const CloseIcon = styled.span`
  position: absolute;
  top: 1rem;
  z-index: 100;
  right: 5rem;
`;

const AnimatingContainer = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgb(0, 0, 0, 0.3);
  transform: translateX(100%);
  transition: all 0.3s ease-in;
  &.clicked {
    transform: translateX(0);
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
const NavContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${colors.tertiary};
  position: absolute;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  transform: translateX(20%);
  gap: 2rem;
  & li {
    margin: 1rem 0;
  }
`;
const Heading = styled.h4`
  color: ${colors.primary};
  text-transform: uppercase;
  font-weight: bold;
`;
export default NavSm;

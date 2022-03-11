import React from 'react';
import NavbarLg from './NavLg';
import NavSm from './NavSm';
import HeaderImg from '../assets/images/family.jpg';
import styled from 'styled-components';
import colors from '../constants/colors';
import Image from '../shared/Image';
const Header = ({ headerText }) => {
  return (
    <Container>
      <NavSm />
      <NavbarLg />
      <TextBox>
        <h1 className='fw-bold'>{headerText}</h1>
        <p>
          Lorem, ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </p>
      </TextBox>
      <Overlay />
      <Image src={HeaderImg} h={60} unit='vh' />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 60vh;
  margin-bottom: 5rem;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  overflow: hidden;
`;

const TextBox = styled.div`
  position: absolute;
  text-align: center;
  text-transform: capitalize;
  color: ${colors.white};
  top: 50%;
  left: 50%;
  z-index: 20;
  transform: translate(-50%, -50%);
  & h1 {
    font-size: 3rem;
    /* white-space: nowrap; */
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(96, 99, 173, 0.6);
`;
export default Header;

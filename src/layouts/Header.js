import React from 'react';
import NavbarLg from './NavLg';
import NavSm from './NavSm';
import HeaderImg from '../assets/images/family.jpg';
import styled from 'styled-components';
import colors from '../constants/colors';
import Image from '../shared/Image';
const Header = () => {
  return (
    <Container>
      <NavSm />
      <NavbarLg />
      <TextBox>
        <h1>header text</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </TextBox>
      <Overlay></Overlay>
      <Image src={HeaderImg} h={50} unit='vh' />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 50vh;
  margin-bottom: 5rem;
`;

const TextBox = styled.div`
  position: absolute;
  text-align: center;
  text-transform: capitalize;
  color: ${colors.white};
  top: 50%;
  left: 50%;
  z-index: 90;
  transform: translate(-50%, -50%);
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${colors.overlay};
`;
export default Header;

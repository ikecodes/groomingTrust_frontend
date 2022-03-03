import React from 'react';
import NavbarLg from './NavLg';
import NavSm from './NavSm';
import HeaderImg from '../assets/images/family.jpg';
import styled from 'styled-components';
import colors from '../constants/colors';
const Header = () => {
  return (
    <Container>
      <NavSm />
      <NavbarLg />
      <ImageBox className='position-absolute'>
        <TextBox>
          <h1>header text</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            fuga delectus debitis dicta commodi unde architecto! Praesentium
            velit, nostrum explicabo quas, atque a corporis itaque, magni enim
            ducimus debitis quos!
          </p>
        </TextBox>
        <Overlay></Overlay>
        <Image src={HeaderImg} alt='header' />
      </ImageBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 60vh;
  margin-bottom: 5rem;
`;
const ImageBox = styled.div`
  width: 100%;
  height: 60vh;
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
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  ${'' /* z-index: 200; */}
  background-color: ${colors.overlay};
`;
export default Header;

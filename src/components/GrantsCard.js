import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FamilyImg from '../assets/images/family.jpg';
import colors from '../constants/colors';
import Button from '../shared/Button';
import Image from '../shared/Image';
import { Slide } from 'react-reveal';
const GrantsCard = () => {
  return (
    <div className='row my-5 flex-md-row-reverse'>
      <div className='col-lg-6'>
        <Slide right>
          <Image src={FamilyImg} alt='family' h={100} unit='%' />
        </Slide>
      </div>
      <div className='col-lg-6'>
        <Slide left>
          <Container>
            <h2 className='my-3'>Child & Family Well-Being</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              debitis ea sit. In beatae ratione temporibus quibusdam sit dicta!
              Autem tenetur non numquam officiis id laudantium esse perspiciatis
              cupiditate culpa.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              debitis ea sit. In beatae ratione temporibus quibusdam sit dicta!
              Autem tenetur non numquam officiis id laudantium esse perspiciatis
              cupiditate culpa.
            </p>
            <Link to='/application'>
              <Button title='apply' primary />
            </Link>
          </Container>
        </Slide>
      </div>
    </div>
  );
};

const Container = styled.div`
  border-left: 1px solid ${colors.textColor};
  padding-left: 1.5rem;
`;
export default GrantsCard;

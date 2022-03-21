import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
const Faqs = () => {
  const [active, setActive] = useState('staff');
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='FAQs'>
      <TypeContainer className='shadow'>
        <h6
          className={`${active === 'staff' ? 'activeClass' : ''}`}
          onClick={() => setActive('staff')}
        >
          about grooming endowment trust
        </h6>
        <h6
          className={`${active === 'trustees' ? 'activeClass' : ''}`}
          onClick={() => setActive('trustees')}
        >
          about grant application
        </h6>
      </TypeContainer>
      <FAQContainer>
        <div className='mb-5 border-bottom'>
          <h5 className='text-capitalize'>how are the top companies chosen?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde
          </p>
        </div>
        <div className='mb-5 border-bottom'>
          <h5 className='text-capitalize'>how are the top companies chosen?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde
            molestiae ab maiores hic ex
          </p>
        </div>
        <div className='mb-5 border-bottom'>
          <h5 className='text-capitalize'>how are the top companies chosen?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde
            molestiae ab maiores hic ex ipsa?
          </p>
        </div>
        <div className='mb-5 border-bottom'>
          <h5 className='text-capitalize'>how are the top companies chosen?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde
            molestiae ab maiores hic ex ipsa? Corporis quam natus deleniti
            accusantium sit? Odio hi
          </p>
        </div>
      </FAQContainer>
    </Layout>
  );
};

const FAQContainer = styled.div`
  color: ${colors.textColor};
`;
const TypeContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: space-around;
  border-bottom: 1px solid ${colors.primary};
  text-transform: capitalize;
  color: ${colors.textColor};
  & h6 {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    margin: 0;
    padding: 0.5rem 0;
    font-weight: 500;
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease-in;
    &.activeClass {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }
`;
export default Faqs;

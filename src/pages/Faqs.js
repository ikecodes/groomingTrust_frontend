import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
const Faqs = () => {
  return (
    <Layout header='FAQs'>
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

export default Faqs;

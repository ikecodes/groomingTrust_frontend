import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
const Faqs = () => {
  return (
    <Layout header='FAQs'>
      <FAQContainer>
        <div className='mb-4'>
          <h4 className='text-capitalize'>how are the top companies chosen?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde
            molestiae ab maiores hic ex ipsa? Corporis quam natus deleniti
            accusantium sit? Odio hic, iusto expedita at fugit velit?
            Dignissimos!
          </p>
        </div>
        <div className='mb-4'>
          <h4 className='text-capitalize'>how are the top companies chosen?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde
            molestiae ab maiores hic ex ipsa? Corporis quam natus deleniti
            accusantium sit? Odio hic, iusto expedita at fugit velit?
            Dignissimos!
          </p>
        </div>
        <div className='mb-4'>
          <h4 className='text-capitalize'>how are the top companies chosen?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde
            molestiae ab maiores hic ex ipsa? Corporis quam natus deleniti
            accusantium sit? Odio hic, iusto expedita at fugit velit?
            Dignissimos!
          </p>
        </div>
        <div className='mb-4'>
          <h4 className='text-capitalize'>how are the top companies chosen?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde
            molestiae ab maiores hic ex ipsa? Corporis quam natus deleniti
            accusantium sit? Odio hic, iusto expedita at fugit velit?
            Dignissimos!
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

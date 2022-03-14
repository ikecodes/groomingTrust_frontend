import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import BlogImg from '../assets/images/family.jpg';
import colors from '../constants/colors';
import Image from '../shared/Image';
const BlogView = () => {
  return (
    <Layout header='blog'>
      <div className='row justify-content-center mb-3'>
        <div className='col-lg-8'>
          <Image src={BlogImg} h={100} unit='%' />
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit
            officiis exercitationem sunt porro quam incidunt impedit eveniet
            molestias laboriosam ipsam dolor, illum ex adipisci expedita
            necessitatibus esse architecto in. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsa excepturi mollitia harum vel
            nemo! Nam mollitia, expedita accusamus unde tenetur omnis
            perferendis similique harum consequatur, ad quo voluptatum provident
            illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Fuga ducimus sunt dolorum obcaecati accusantium assumenda,
            praesentium suscipit culpa nam repellendus incidunt totam voluptatum
            magnam deserunt quidem aut necessitatibus impedit. Incidunt. illum.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            ducimus sunt dolorum obcaecati accusantium assumenda, praesentium
            suscipit culpa nam repellendus incidunt totam voluptatum magnam
          </div>
          <div className='mt-3 text-capitalize text-center'>
            <Deadline className='p-1 rounded'>published</Deadline>
            <p className='mt-2'>
              22nd January, 2022
              <span className='text-capitalize d-block'>by lorenze davis.</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Deadline = styled.span`
  color: ${colors.white};
  background-color: ${colors.overlay};
`;
export default BlogView;

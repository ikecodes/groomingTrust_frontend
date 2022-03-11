import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import BlogImg from '../assets/images/family.jpg';
import colors from '../constants/colors';
import Image from '../shared/Image';
const BlogView = () => {
  return (
    <Layout header='blogs'>
      <div className='row justify-content-center'>
        <div className='col-lg-6 mb-5'>
          <Image src={BlogImg} h={100} unit='%' />
        </div>
        <div className='col-lg-6 mb-5'>
          <BlogContent>
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
            magnam deserunt quidem aut necessitatibus impedit. Incidunt.
          </BlogContent>
        </div>
      </div>
    </Layout>
  );
};

const BlogContent = styled.div`
  color: ${colors.textColor};
`;

export default BlogView;

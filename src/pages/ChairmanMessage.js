import React from 'react';
import styled from 'styled-components';
import ChairmanImg from '../assets/images/chairman.jpg';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
import Section from '../layouts/Section';
const ChairmanMessage = () => {
  return (
    <Layout>
      <Section>
        <div className='row'>
          <div className='col-lg-6'>
            <ImageBox src={ChairmanImg} />
          </div>
          <div className='col-lg-6 my-3'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quaerat voluptatibus pariatur perspiciatis exercitationem ipsum
              sequi, quidem hic suscipit, mollitia eum! Illum exercitationem
              totam voluptate non soluta sequi dolor inventore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quaerat voluptatibus pariatur perspiciatis exercitationem ipsum
              sequi, quidem hic suscipit, mollitia eum! Illum exercitationem
              totam voluptate non soluta sequi dolor inventore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quaerat voluptatibus pariatur perspiciatis exercitationem ipsum
              sequi, quidem hic suscipit, mollitia eum! Illum exercitationem
              totam voluptate non soluta sequi dolor inventore.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className='my-3 text-capitalize'>
          the idea behind grooming trust fund
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at hic
          dolore ipsa veniam iure quae enim alias voluptates molestias error,
          odit qui assumenda consequuntur cumque, non recusandae porro
          exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Magnam at hic dolore ipsa veniam iure quae enim alias voluptates
          molestias error, odit qui assumenda consequuntur cumque, non
          recusandae porro exercitationem! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magnam at hic dolore ipsa veniam iure
          quae enim alias voluptates molestias error, odit qui assumenda
          consequuntur cumque, non recusandae porro exercitationem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at hic
          dolore ipsa veniam iure quae enim alias voluptates molestias error,
          odit qui assumenda consequuntur cumque, non recusandae porro
          exercitationem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at hic
          dolore ipsa veniam iure quae enim alias voluptates molestias error,
          odit qui assumenda consequuntur cumque, non recusandae porro
          exercitationem!
        </p>
      </Section>
      <Section>
        <h2 className='my-3 text-capitalize'>mission</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at hic
          dolore ipsa veniam iure quae enim alias voluptates molestias error,
          odit qui assumenda consequuntur cumque, non recusandae porro
          exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Magnam at hic dolore ipsa veniam iure quae enim alias voluptates
          molestias error, odit qui assumenda consequuntur cumque, non
          recusandae porro exercitationem! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magnam at hic dolore ipsa veniam iure
          quae enim alias voluptates molestias error, odit qui assumenda
          consequuntur cumque, non recusandae porro exercitationem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at hic
          dolore ipsa veniam iure quae enim alias voluptates molestias error,
          odit qui assumenda consequuntur cumque, non recusandae porro
          exercitationem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at hic
          dolore ipsa veniam iure quae enim alias voluptates molestias error,
          odit qui assumenda consequuntur cumque, non recusandae porro
          exercitationem!
        </p>
      </Section>
    </Layout>
  );
};

const ImageBox = styled.img`
  border-radius: 2rem;
  width: 100%;
  height: auto;
  object-fit: contain;
`;
export default ChairmanMessage;

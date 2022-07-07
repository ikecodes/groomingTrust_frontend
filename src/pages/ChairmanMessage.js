import React from "react";
import styled from "styled-components";
import ChairmanImg from "../assets/images/chairman.jpg";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
const ChairmanMessage = () => {
  return (
    <Layout header='Chairpersons message'>
      <Section>
        <div className='row'>
          <div className='col-lg-6'>
            <ImageBox src={ChairmanImg} />
          </div>
          <div className='col-lg-6 my-3'>
            <p>
              Impact and development are essential parts of the socio-economic
              growth in Nigeria. That is why setting up the Grooming Endowment
              Trust has been seen as necessary to aid in achieving certain
              matrices in social divisions such as health, education, and
              community development amongst others. I stand as the chairperson
              of the organisation to ensure that every objective, mission and
              vision set for us is being achieved. For years, we have found ways
              to manage donations and grow them for impact on our society and
              several programs are being designed and coordinated to fulfil our
              goals. I, Adaobi Okafor, am very enthusiastic about our mission
              and hope to present further good news and socio-economic
              achievements during my time as chairperson, and carry out my
              functions to the best of my ability. Welcome to Grooming Endowment
              Trust.
            </p>
          </div>
        </div>
      </Section>
      {/* <Section>
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
      </Section> */}
      {/* <Section>
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
      </Section> */}
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

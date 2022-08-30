import React from "react";
import styled from "styled-components";
import ChairmanImg from "../assets/images/chairperson.jpeg";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
const ChairmanMessage = () => {
  return (
    <Layout header="Chairperson's message">
      <Section>
        <div className='row'>
          <div className='col-lg-4'>
            <ImageBox src={ChairmanImg} />
          </div>
          <div className='col-lg-8 my-3'>
            <p>
              Actions that lead to positive impact and development are essential
              parts of the socio-economic growth of any country. However, recent
              global events have led to unprecedented economic challenges with
              major adverse impacts on development, especially for African
              countries. The United Nations has warned that the devastating
              impact of the COVID-19 pandemic will continue for years to come,
              unless smart investments in economic, societal and climate
              resilience are made to boost the sustainable recovery of the
              global economy.
            </p>
            <p>
              Consequently, the Grooming Endowment Trust (GET) was incorporated
              in 2020 at the peak of the Covid-19 pandemic to support,
              contribute, and promote sustainable social initiatives in
              education, health, enterprise and community development, as well
              as humanitarian relief for the most vulnerable, in line with the
              Sustainable Development Goals. Our primary motivation is ‘Bringing
              Ideas to Life’ - which we do by providing grants and funding for
              early-stage innovators and businesses, as we believe the
              deployment of responsible capital is essential for bringing these
              oft-overlooked ideas to life. We also provide catalytic inputs for
              the growth of these businesses that drive our economies, through
              capacity building, networks, technical assistance, and strategic
              guidance, creating a multiplier effect with socioeconomic benefits
              such as employment, and knowledge creation; providing a pathway to
              end poverty. Our delivery framework rethinks the balance between
              investment and philanthropy, with a focus on promoting dignity and
              sustainability in our society.
            </p>
            <p>
              We are very passionate about delivering on our objectives; and as
              the Chairperson, I will ensure that the Trust is steered towards
              the achievement of these goals as we partner with those who share
              our values and ethos.
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

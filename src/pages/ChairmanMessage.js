import React from "react";
import styled from "styled-components";
import ChairmanImg from "../assets/images/chairperson.jpeg";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
const ChairmanMessage = () => {
  return (
    <Layout header='Chairpersons message'>
      <Section>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <ImageBox src={ChairmanImg} />
          </div>
          <div className='col-lg-6 my-3'>
            <p>
              Impact and development are essential parts of the socio-economic
              growth of a Country. African countries are experiencing an
              unprecedented economic downturn with major adverse impacts on
              development.
            </p>
            <p>
              The United Nations have warned that the devastating socio-economic
              impact of the COVID-19 pandemic will be felt for years to come
              unless smart investments in economic, societal and climate
              resilience ensure a robust and sustainable recovery of the global
              economy.
            </p>
            <p>
              Grooming Endowment Trust (GET) was incorporated in 2020 at the
              peak of the Covid 19 pandemic with aims and objectives centred
              around the Sustainable Development Goals (SDGs) to advocate,
              support, contribute, and promote sustainable social initiatives in
              education, health, enterprise; community development in peri-urban
              and rural areas and aid and humanitarian relief for people in
              need.
            </p>
            <p>
              Our tagline is ‘Bringing Ideas to Life’ which we do by providing
              grant and funding for early-stage Companies that is needed to
              bring their ideas to life. We support these Companies with the
              tools, capacity building, networks, technical assistance, and
              strategic guidance needed to succeed and scale up their
              businesses. This creates employment which leads to socio-economic
              development and a clear pathway to end poverty. We believe that
              access to finance is not a gesture of charity but a fundamental
              human right that restores dignity and confidence.
            </p>
            <p>
              We are very passionate about our objectives, mission and vision
              and as the Chairperson, will ensure that the Trust is steered
              towards achieving these as we partner with other players that
              share a common interest as the Trust.
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

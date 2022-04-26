import React, { useState } from "react";
import { MdHealthAndSafety, MdSchool } from "react-icons/md";
import { GiLovers } from "react-icons/gi";
import { AiTwotonePieChart } from "react-icons/ai";
import styled from "styled-components";
import colors from "../constants/colors";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import { FaChartLine } from "react-icons/fa";

const ProgramAreas = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='programme areas'>
      <Section>
        <div className='row justify-content-center align-items-center'>
          <div className='col-lg-4  mb-4'>
            <IconContainer className='h-100 p-5'>
              <MdHealthAndSafety size={100} color='#C386C0' />
              <h4 className='text-capitalize fw-bold'>health</h4>
            </IconContainer>
          </div>
          <div className='col-lg-8'>
            <p>
              According to the World Health Organisation (WHO), 77% of the
              payments made in Nigeria with respect to health care are made out
              of pocket. Considering the reducing purchasing power of Nigerian
              demography, it is only imperative that a functional social health
              care system is put in place to cover the gap. However, with this
              lack, Grooming Endowment Trust has decided to add this area as one
              of its scope whereby we promote initiatives and companies in this
              sector through our impact development programs.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className='row justify-content-center flex-md-row-reverse align-items-center'>
          <div className='col-lg-4 mb-4'>
            <IconContainer className='h-100 p-5'>
              <MdSchool size={100} color='#C386C0' />
              <h4 className='text-capitalize fw-bold'>education</h4>
            </IconContainer>
          </div>
          <div className='col-lg-8'>
            <p>
              Another social responsibility area the Grooming Endowment Trust is
              interested in is education in society. Education is one sector in
              any society that has enabled them to propel beyond their
              expectation. This is a result of their educated and skilled
              demography and without that, we see an economic and social decline
              in several countries as illiteracy rates increase. With that, one
              area of focus is on the educational sector in society and
              empowering programs and initiatives that support the promotion of
              this sector.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className='row justify-content-center align-items-center'>
          <div className='col-lg-4 mb-4'>
            <IconContainer className='h-100 p-5'>
              <GiLovers size={100} color='#C386C0' />
              <h4 className='text-capitalize fw-bold'>humanitarian works</h4>
            </IconContainer>
          </div>
          <div className='col-lg-8'>
            <p>
              Non-governmental organisations such as ours and individuals who
              have had good track records in the field of humanitarian work are
              our focus to support when it comes to humanitarian work. Impact
              and development are our core objectives and this is why it is only
              imperative that we commit a good amount of time and resources made
              available to us by our donors to support others in this field.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className='row justify-content-center flex-md-row-reverse align-items-center'>
          <div className='col-lg-4 mb-4'>
            <IconContainer className='h-100 p-5'>
              <AiTwotonePieChart size={100} color='#C386C0' />
              <h4 className='text-capitalize fw-bold'>
                enterprise and community development
              </h4>
            </IconContainer>
          </div>
          <div className='col-lg-8'>
            <p>
              Many communities are underserved in various aspects and they are
              initiatives that aid in the development of these aspects. Grooming
              Endowment Trust is committed to supporting enterprises that aid in
              social development in various underserved and underdeveloped
              communities.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className='row justify-content-center align-items-center'>
          <div className='col-lg-4 mb-4'>
            <IconContainer className='h-100 p-5'>
              <FaChartLine size={100} color='#C386C0' />
              <h4 className='text-capitalize fw-bold'>
                Social entrepreneurship
              </h4>
            </IconContainer>
          </div>
          <div className='col-lg-8'>
            <p>
              Considering the fact that many societies have their cultural,
              social and environmental issues, social entrepreneurship has been
              a way in which individuals, groups and companies have brought
              about sustainable solutions to these issues. They organise, fund
              and implement these solutions to solve issues and Grooming
              Endowment Trust is committed to supporting these sorts of
              initiatives.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

const IconContainer = styled.div`
  background-color: ${colors.grey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2.5rem;
  align-items: center;
  text-align: center;

  & h4 {
    color: ${colors.secondary};
  }
`;

export default ProgramAreas;

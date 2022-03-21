import React, { useState } from 'react';
import { MdHealthAndSafety, MdSchool } from 'react-icons/md';
import { GiLovers } from 'react-icons/gi';
import { AiTwotonePieChart } from 'react-icons/ai';
import styled from 'styled-components';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
import Section from '../layouts/Section';
import { FaChartLine } from 'react-icons/fa';

const ProgramAreas = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='programme areas'>
      <Section>
        <div className='row justify-content-center'>
          <div className='col-lg-4  mb-4'>
            <IconContainer className='h-100 p-5'>
              <MdHealthAndSafety size={100} color='#C386C0' />
              <h4 className='text-capitalize fw-bold'>health</h4>
            </IconContainer>
          </div>
          <div className='col-lg-8'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ullam nostrum architecto perferendis aliquid
              molestiae, accusamus corporis corrupti placeat voluptatem non
              dolor voluptates accusantium iste odit ab ipsa esse autem! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iure nulla,
              maxime porro doloremque quis enim, quisquam molestiae temporibus
              incidunt nihil, tempore eos hic voluptas dolores. Tempore
              voluptatibus vitae cum voluptatem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ullam nostrum architecto perferendis aliquid
              molestiae, accusamus corporis corrupti placeat voluptatem non
              dolor voluptates accusantium iste odit ab ipsa esse autem! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iure nulla,
              maxime porro doloremque quis enim, quisquam molestiae temporibus
              incidunt nihil, tempore eos hic voluptas dolores. Tempore
              voluptatibus vitae cum voluptatem!
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className='row justify-content-center flex-md-row-reverse'>
          <div className='col-lg-4 mb-4'>
            <IconContainer className='h-100 p-5'>
              <MdSchool size={100} color='#C386C0' />
              <h4 className='text-capitalize fw-bold'>education</h4>
            </IconContainer>
          </div>
          <div className='col-lg-8'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ullam nostrum architecto perferendis aliquid
              molestiae, accusamus corporis corrupti placeat voluptatem non
              dolor voluptates accusantium iste odit ab ipsa esse autem! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iure nulla,
              maxime porro doloremque quis enim, quisquam molestiae temporibus
              incidunt nihil, tempore eos hic voluptas dolores. Tempore
              voluptatibus vitae cum voluptatem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ullam nostrum architecto perferendis aliquid
              molestiae, accusamus corporis corrupti placeat voluptatem non
              dolor voluptates accusantium iste odit ab ipsa esse autem! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iure nulla,
              maxime porro doloremque quis enim, quisquam molestiae temporibus
              incidunt nihil, tempore eos hic voluptas dolores. Tempore
              voluptatibus vitae cum voluptatem!
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className='row justify-content-center'>
          <div className='col-lg-4 mb-4'>
            <IconContainer className='h-100 p-5'>
              <GiLovers size={100} color='#C386C0' />
              <h4 className='text-capitalize fw-bold'>humanitarian work</h4>
            </IconContainer>
          </div>
          <div className='col-lg-8'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ullam nostrum architecto perferendis aliquid
              molestiae, accusamus corporis corrupti placeat voluptatem non
              dolor voluptates accusantium iste odit ab ipsa esse autem! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iure nulla,
              maxime porro doloremque quis enim, quisquam molestiae temporibus
              incidunt nihil, tempore eos hic voluptas dolores. Tempore
              voluptatibus vitae cum voluptatem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ullam nostrum architecto perferendis aliquid
              molestiae, accusamus corporis corrupti placeat voluptatem non
              dolor voluptates accusantium iste odit ab ipsa esse autem! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iure nulla,
              maxime porro doloremque quis enim, quisquam molestiae temporibus
              incidunt nihil, tempore eos hic voluptas dolores. Tempore
              voluptatibus vitae cum voluptatem!
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className='row justify-content-center flex-md-row-reverse'>
          <div className='col-lg-4 mb-4'>
            <IconContainer className='h-100 p-5'>
              <AiTwotonePieChart size={100} color='#C386C0' />
              <h4 className='text-capitalize fw-bold'>enterprise</h4>
            </IconContainer>
          </div>
          <div className='col-lg-8'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ullam nostrum architecto perferendis aliquid
              molestiae, accusamus corporis corrupti placeat voluptatem non
              dolor voluptates accusantium iste odit ab ipsa esse autem! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iure nulla,
              maxime porro doloremque quis enim, quisquam molestiae temporibus
              incidunt nihil, tempore eos hic voluptas dolores. Tempore
              voluptatibus vitae cum voluptatem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ullam nostrum architecto perferendis aliquid
              molestiae, accusamus corporis corrupti placeat voluptatem non
              dolor voluptates accusantium iste odit ab ipsa esse autem! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iure nulla,
              maxime porro doloremque quis enim, quisquam molestiae temporibus
              incidunt nihil, tempore eos hic voluptas dolores. Tempore
              voluptatibus vitae cum voluptatem!
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className='row justify-content-center'>
          <div className='col-lg-4 mb-4'>
            <IconContainer className='h-100 p-5'>
              <FaChartLine size={100} color='#C386C0' />
              <h4 className='text-capitalize fw-bold'>investment</h4>
            </IconContainer>
          </div>
          <div className='col-lg-8'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ullam nostrum architecto perferendis aliquid
              molestiae, accusamus corporis corrupti placeat voluptatem non
              dolor voluptates accusantium iste odit ab ipsa esse autem! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iure nulla,
              maxime porro doloremque quis enim, quisquam molestiae temporibus
              incidunt nihil, tempore eos hic voluptas dolores. Tempore
              voluptatibus vitae cum voluptatem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ullam nostrum architecto perferendis aliquid
              molestiae, accusamus corporis corrupti placeat voluptatem non
              dolor voluptates accusantium iste odit ab ipsa esse autem! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iure nulla,
              maxime porro doloremque quis enim, quisquam molestiae temporibus
              incidunt nihil, tempore eos hic voluptas dolores. Tempore
              voluptatibus vitae cum voluptatem!
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

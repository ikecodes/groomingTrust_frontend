import React, { useState } from 'react';
import styled from 'styled-components';
import PortfolioCard from '../components/PortfolioCard';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';

const Portfolio = () => {
  const [active, setActive] = useState('health');
  return (
    <Layout header='portfolio'>
      <TypeContainer>
        <h6
          className={`${active === 'health' ? 'activeClass' : ''}`}
          onClick={() => setActive('health')}
        >
          health
        </h6>
        <h6
          className={`${active === 'education' ? 'activeClass' : ''}`}
          onClick={() => setActive('education')}
        >
          education
        </h6>
        <h6
          className={`${active === 'investment' ? 'activeClass' : ''}`}
          onClick={() => setActive('investment')}
        >
          investment
        </h6>
      </TypeContainer>

      <div className='row'>
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </Layout>
  );
};

const TypeContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: space-around;
  border-bottom: 1px solid ${colors.primary};
  text-transform: capitalize;
  color: ${colors.textColor};
  & h6 {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    margin: 0;
    padding: 0.5rem 0;
    font-weight: 500;
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease-in;
    &.activeClass {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }
`;

export default Portfolio;

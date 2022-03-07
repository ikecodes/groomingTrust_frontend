import React, { useState } from 'react';

import styled from 'styled-components';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
import StaffImg from '../assets/images/staff.jpg';
import StaffTrusteeCard from '../components/StaffTrusteeCard';

const StaffsAndTrustees = () => {
  const [active, setActive] = useState('staff');
  return (
    <Layout>
      <TypeContainer>
        <h4
          className={`${active === 'staff' ? 'activeClass' : ''}`}
          onClick={() => setActive('staff')}
        >
          staff
        </h4>
        <h4
          className={`${active === 'trustees' ? 'activeClass' : ''}`}
          onClick={() => setActive('trustees')}
        >
          trustees
        </h4>
      </TypeContainer>

      <div className='row'>
        <StaffTrusteeCard active={active} image={StaffImg} />
        <StaffTrusteeCard active={active} image={StaffImg} />
        <StaffTrusteeCard active={active} image={StaffImg} />
        <StaffTrusteeCard active={active} image={StaffImg} />
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
  & h4 {
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

export default StaffsAndTrustees;

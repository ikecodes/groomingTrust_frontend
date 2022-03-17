import React from 'react';
import styled from 'styled-components';
import AdminNav from './AdminNav';
const AdminLayout = ({ children }) => {
  return (
    <div className='container-fluid my-3'>
      <div className='row justify-content-center'>
        <div className='col-lg-2'>
          <AdminNav />
        </div>
        <ActionContainer className='col-lg-8 '>{children}</ActionContainer>
      </div>
    </div>
  );
};

const ActionContainer = styled.div`
  overflow: hidden;
  background-color: skyblue;
  border-top-right-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
`;
export default AdminLayout;

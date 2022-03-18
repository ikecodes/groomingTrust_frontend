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
        <ActionContainer className='col-lg-10 shadow p-5'>
          <Container>{children}</Container>
        </ActionContainer>
      </div>
    </div>
  );
};

const ActionContainer = styled.div`
  overflow: hidden;
  border-top-right-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
`;
const Container = styled.div`
  height: 90vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: none;
    background-color: #999bcb;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(96, 99, 173);
    outline: none;
  }
`;
export default AdminLayout;

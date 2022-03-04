import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import Image from '../shared/Image';
import colors from '../constants/colors';

const StaffTrusteeModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className='d-flex gap-3 flex-wrap flex-md-nowrap'>
          <Image alt={props.active} src={props.image} h={15} unit='rem' />
          <ContentBox>
            <h4>Centered Modal</h4>
            <h5>Executive Assistant, President's Office</h5>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </ContentBox>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const ContentBox = styled.div`
  color: ${colors.textColor};
  & h5 {
    color: ${colors.primary};
  }
`;

export default StaffTrusteeModal;

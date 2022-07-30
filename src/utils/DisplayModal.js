import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import Image from "../shared/Image";
import colors from "../constants/colors";

const DisplayModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className='row'>
          <div className='col-md-4'>
            <Image alt={props.active} src={props.image} h={15} unit='rem' />
          </div>
          <div className='col-md-8'>
            <ContentBox>
              <h4 className='mt-3'>{props?.name}</h4>
              <h5>{props?.position}</h5>
              <p>{props?.about}</p>
            </ContentBox>
          </div>
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

export default DisplayModal;

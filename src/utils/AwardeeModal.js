import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import Image from "../shared/Image";
import colors from "../constants/colors";

const AwardeeModal = (props) => {
  return (
    <Modal
      {...props}
      size='xl'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className='row'>
          <div className='col-md-4'>
            <Image alt={props.active} src={props.image} h={25} unit='rem' />
          </div>
          <div className='col-md-8'>
            <ContentBox>
              <h4 className='mt-3'>{props?.name}</h4>
              <Info className='border-start'>
                <div>
                  <span className='text-secondary'>Email:</span>{" "}
                  <span
                    role='button'
                    onClick={(e) => {
                      window.location.href = `mailto:${props?.email}`;
                    }}
                  >
                    {props?.email}
                  </span>
                </div>
                <div>
                  <span className='text-secondary'>Country:</span>{" "}
                  <span>{props?.country}</span>
                </div>
                <div>
                  <span className='text-secondary'>Sector:</span>{" "}
                  <span>{props?.sector}</span>
                </div>
                <div>
                  <span className='text-secondary'>Year:</span>{" "}
                  <span>{props?.year}</span>
                </div>
                <div>
                  <span className='text-secondary'>Business Name:</span>{" "}
                  <span>{props?.businessName}</span>
                </div>
              </Info>
              <h5>{props?.position}</h5>
              <p dangerouslySetInnerHTML={{ __html: props?.about }} />
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
const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  & div {
    margin: 0 10px 5px;
  }
`;

export default AwardeeModal;

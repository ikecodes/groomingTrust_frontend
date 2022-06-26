import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import colors from "../constants/colors";
import { AiFillCloseCircle } from "react-icons/ai";

const TextModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body className='position-relative'>
        <IconBox>
          <AiFillCloseCircle
            size={30}
            color={colors.primary}
            onClick={() => props.onHide()}
            role='button'
          />
        </IconBox>

        <div className='d-flex gap-3 flex-wrap flex-md-nowrap'>
          <ContentBox className='pt-5'>
            <p>{props?.description}</p>
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
const IconBox = styled.div`
  position: absolute;
  top: 1;
  right: 0;
  transform: translateX(-50%);
`;

export default TextModal;

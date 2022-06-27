import React, { useState } from "react";
import styled from "styled-components";
import TestImg from "../assets/images/event.jpg";
import { motion } from "framer-motion";
import TextModal from "../utils/TextModal";

const ProgramAreasCard = ({ icon, title, description, image }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='col-lg-4 col-md-6 mb-5'
      role='button'
    >
      <TextModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        description={description}
      />
      <div
        className='text-center shadow d-flex flex-row'
        onClick={() => setModalShow(true)}
      >
        <ImageContainer>
          <Img src={TestImg} alt={title} />
        </ImageContainer>
        <div className='w-50 d-flex align-items-center justify-content-center position-relative flex-column bg-light'>
          <div>{icon}</div>
          <h6 className=' text-capitalize mt-2'>{title}</h6>
        </div>
      </div>
    </motion.div>
  );
};

const ImageContainer = styled.div`
  height: 10rem;
  width: 50%;
  flex-wrap: nowrap;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default ProgramAreasCard;

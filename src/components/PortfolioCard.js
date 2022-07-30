import React from "react";
import { deleteDocWithImage } from "../firebase";
import { FaRegTrashAlt } from "react-icons/fa";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import colors from "../constants/colors";
import Button from "../shared/Button";
import Image from "../shared/Image";
const PortfolioCard = ({ id, title, image, description, link, imageRef }) => {
  const admin = localStorage.getItem("admin");
  const handleDelete = async () => {
    await deleteDocWithImage(imageRef, "portfolio", id);
  };

  return (
    <div className='col-lg-4 col-md-6 mb-5'>
      <CardContainer>
        <Card className='border-0 bg-transparent'>
          <Image src={image} h={15} unit='rem' alt='porfolio' />
          <Card.Body>
            <Card.Title className='text-capitalize'>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <a href={link} target='_blank' rel='noreferrer'>
              <Button title='learn more' primary />
            </a>
          </Card.Body>
        </Card>
        {admin && (
          <FaRegTrashAlt
            role='button'
            className='mt-3 text-danger'
            size={25}
            onClick={handleDelete}
          />
        )}
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  background-color: ${colors.grey};
  padding: 1rem;
  border-radius: 1rem;
`;

export default PortfolioCard;

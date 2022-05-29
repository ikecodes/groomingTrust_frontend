import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Button from "../shared/Button";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Image from "../shared/Image";

const EventsCard = ({ id, title, image, author, createdAt, description }) => {
  return (
    <Fade bottom>
      <div className='col-lg-4 col-md-6 mb-5'>
        <CardContainer className='shadow-lg'>
          <Card>
            <Image src={image} h={15} unit='rem' />
            <Card.Body>
              <Card.Title className='text-capitalize'>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Link to={`/blog-view?${id}`}>
                <Button title='read more' />
              </Link>
            </Card.Body>
          </Card>
        </CardContainer>
      </div>
    </Fade>
  );
};

const CardContainer = styled.div`
  border-radius: 1rem;
  overflow: hidden;
`;

export default EventsCard;

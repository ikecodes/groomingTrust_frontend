import React, { useState } from "react";
import { deleteDocWithImage } from "../firebase";
import { FaRegTrashAlt } from "react-icons/fa";
import { Card } from "react-bootstrap";
import Button from "../shared/Button";
import Image from "../shared/Image";
import DisplayModal from "../utils/DisplayModal";
const OurTeamCard = ({ id, image, name, position, about, imageRef }) => {
  const [modalShow, setModalShow] = useState(false);
  const admin = localStorage.getItem("admin");
  const handleDelete = async () => {
    await deleteDocWithImage(imageRef, "members", id);
  };

  return (
    <div className='col-lg-3 col-md-6 mb-5'>
      <DisplayModal
        show={modalShow}
        image={image}
        onHide={() => setModalShow(false)}
        name={name}
        position={position}
        about={about}
      />
      <Card className='border-0 text-center'>
        <Image alt='staff & trustees' src={image} h={20} unit='rem' rounded />
        <Card.Body className='shadow'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{position}</Card.Text>
          <Button title='read bio' handleClick={() => setModalShow(true)} />
        </Card.Body>
        {admin && (
          <FaRegTrashAlt
            role='button'
            className='m-2 text-danger'
            size={25}
            onClick={handleDelete}
          />
        )}
      </Card>
    </div>
  );
};

export default OurTeamCard;

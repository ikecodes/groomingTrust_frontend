import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from '../shared/Button';
import Image from '../shared/Image';
import DisplayModal from '../utils/DisplayModal';
const StaffTrusteeCard = ({ active, image, name, position, about }) => {
  const [modalShow, setModalShow] = useState(false);

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
      <Card className='border-0 text-center shadow '>
        <Image alt={active} src={image} h={15} unit='rem' rounded />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{position}</Card.Text>
          <Button title='read bio' handleClick={() => setModalShow(true)} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default StaffTrusteeCard;

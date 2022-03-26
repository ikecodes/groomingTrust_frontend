import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from '../shared/Button';
import Image from '../shared/Image';
import DisplayModal from '../utils/DisplayModal';
const StaffTrusteeCard = ({ active, image }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='col-lg-3 col-md-6 mb-5'>
      <DisplayModal
        show={modalShow}
        image={image}
        onHide={() => setModalShow(false)}
      />
      <Card className='border-0 text-center shadow '>
        <Image alt={active} src={image} h={15} unit='rem' rounded />
        <Card.Body>
          <Card.Title>Minor M. Shaw</Card.Title>
          <Card.Text>Chairman</Card.Text>
          <Button title='read bio' handleClick={() => setModalShow(true)} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default StaffTrusteeCard;

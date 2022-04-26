import React from "react";
import { Link } from "react-router-dom";
import ChairmanImage from "../assets/images/chairman.jpg";
import PrimaryButton from "../shared/Button";
import Section from "../layouts/Section";
import Image from "../shared/Image";
import { Slide } from "react-reveal";
const ChairmanMessage = () => {
  return (
    <Section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <Slide left>
              <Image
                src={ChairmanImage}
                alt='chairman'
                h={100}
                unit='%'
                rounded
              />
            </Slide>
          </div>
          <div className='col-lg-6'>
            <Slide bottom>
              <h2 className='my-3'>Chairman's message</h2>
              <p>
                Impact and development are essential parts of the socio-economic
                growth in Nigeria. That is why setting up the Grooming Endowment
                Trust has been seen as necessary to aid in achieving certain
                matrices in social divisions such as health, education, and
                community development amongst others. I stand as the chairperson
                of the organisation to ensure that every objective, mission and
                vision set for us is being achieved.
              </p>
              <Link to='/chairmans-message'>
                <PrimaryButton title='read more' primary />
              </Link>
            </Slide>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ChairmanMessage;

import React from "react";
import { Link } from "react-router-dom";
import ChairmanImage from "../assets/images/chairperson.jpeg";
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
              <h2 className='my-3'>Chairperson's message</h2>
              <p>
                Impact and development are essential parts of the socio-economic
                growth of a Country. African countries are experiencing an
                unprecedented economic downturn with major adverse impacts on
                development.
              </p>
              <p>
                The United Nations have warned that the devastating
                socio-economic impact of the COVID-19 pandemic will be felt for
                years to come unless smart investments in economic, societal and
                climate resilience ensure a robust and sustainable recovery of
                the global economy.
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

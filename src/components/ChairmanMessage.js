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
                Actions that lead to positive impact and development are
                essential parts of the socio-economic growth of any country.
                However, recent global events have led to unprecedented economic
                challenges with major adverse impacts on development, especially
                for African countries. The United Nations has warned that the
                devastating impact of the COVID-19 pandemic will continue for
                years to come, unless smart investments in economic, societal
                and climate resilience are made to boost the sustainable
                recovery of the global economy.
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

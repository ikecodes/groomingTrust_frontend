import React, { useState } from "react";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import AboutImg1 from "../assets/images/family.jpg";
import Image from "../shared/Image";
import AboutSlides from "../components/AboutSlides";
import styled from "styled-components";

const About = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='about us'>
      {/* <Section>
        <Image src={AboutImg1} alt='about' h={50} unit='vh' />
      </Section> */}
      <Section>
        <div className='row gap-2'>
          <div className='col-lg-5'>
            <Image src={AboutImg1} alt='about' h={20} unit='rem' rounded />
          </div>
          <div className='col-lg-6'>
            {/* <h2 className='my-3 text-capitalize'>Grooming Endownment Trust</h2> */}
            <p>
              Grooming Endowment Trust is a trust set up in the year 2020 to
              create impact and support various initiatives. As stated in its
              legal documentation but not limited to, its objectives are to:
            </p>
            <List>
              <li>
                To promote sustainable social initiatives in education, health,
                enterprise and community development
              </li>
              <li>
                To promote and support education, research, skill development,
                innovation and training
              </li>
              <li>
                To promote the improvement of healthcare delivery in peri-urban
                and rural areas
              </li>
              <li>
                To promote enterprise and community-driven inclusive development
              </li>
              <li>
                To promote entrepreneurship and venture formation through
                investments in sustainable initiatives
              </li>
              <li>To aid and humanitarian relief for people in need</li>
              <li>
                To contribute and advocate for any related activities under the
                Sustainable Development Goals
              </li>
            </List>
            <p className='mt-2'>
              To achieve these, a group of trustees have been appointed to
              oversee the trust’s vision, mission, and objectives.
            </p>
          </div>
        </div>
      </Section>
      {/* <Section>
        <div className='row flex-md-row-reverse'>
          <div className='col-lg-6'>
            <Image src={AboutImg1} alt='about' h={100} unit='%' rounded />
          </div>
          <div className='col-lg-6'>
            <h2 className='my-3 text-capitalize  '>fulfilling a legacy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              pariatur odio odit ipsam perspiciatis quisquam iure in qui
              distinctio maxime, voluptates cupiditate tempora consequuntur.
              Deleniti nesciunt perferendis cumque officia ipsam? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ipsum quas maxime
              totam natus animi ratione accusantium illum quo sit quam, nisi
              dolores! Amet rem dolore expedita dolorum libero esse nisi.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              facilis est dignissimos quis ex, aliquid pariatur corrupti
              laudantium fugit unde vel doloremque itaque, minima labore ipsa,
              ad debitis. Hic, eveniet!
            </p>
          </div>
        </div>
      </Section> */}
      <AboutSlides />
    </Layout>
  );
};

const List = styled.ul`
  list-style: disc;
  & li:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
export default About;

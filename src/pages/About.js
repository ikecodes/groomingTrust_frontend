import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import Section from '../layouts/Section';
import AboutImg1 from '../assets/images/family.jpg';
import Image from '../shared/Image';
import AboutSlides from '../components/AboutSlides';

const About = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='about us'>
      <Section>
        <Image src={AboutImg1} alt='about' h={50} unit='vh' />
      </Section>
      <Section>
        <div className='row'>
          <div className='col-lg-6'>
            <Image src={AboutImg1} alt='about' h={100} unit='%' rounded />
          </div>
          <div className='col-lg-6'>
            <h2 className='my-3 text-capitalize'>fulfilling a legacy</h2>
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
      </Section>
      <Section>
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
      </Section>
      <AboutSlides />
    </Layout>
  );
};

export default About;

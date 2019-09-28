import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Conference from '../components/Conference';

import twbc15 from '../assets/img/twbc15.png';
import twbc16 from '../assets/img/twbc16.png';
import twbc17 from '../assets/img/twbc17.png';
import twbc18 from '../assets/img/twbc18.png';
import twbc19 from '../assets/img/twbc19_alt.png';

const conferences = props => {
  return (
    <div className="">
      <Navigation />
      <main>
        <section className="section-intro">
          <h2 className="heading-secondary">Conferences</h2>
          <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab magni praesentium ut nihil. Eius corrupti facilis nisi dignissimos esse sed, vel, fuga quas ipsum accusantium maiores incidunt! Excepturi, quas necessitatibus.</p>
        </section>
        <section className="section-conferences">
          <Conference title="Staying Stong in the Lord" link="/#" date="29th June, 2019" img={twbc19} imgAlt="2019 brochure"/>
          <Conference title="Bloom: Bible Talks From Psalm 1" link="/#" date="16th June, 2018" img={twbc18} imgAlt="2018 brochure"/>
          <Conference title="Great Expectations: Destruction, Disapointment and Hope" link="/#" date="27th May, 2017" img={twbc17} imgAlt="2017 brochure"/>
          <Conference title="Women Who Pray" link="/#" date="14th May, 2016" img={twbc16} imgAlt="2016 brochure"/>
          <Conference title="The Essential Wardrobe" link="/#" date="2nd May, 2015" img={twbc15} imgAlt="2015 brochure"/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default conferences;

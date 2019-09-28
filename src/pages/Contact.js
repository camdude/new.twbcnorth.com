import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Form from '../components/Form';
import FormInput from '../components/FormInput';

const home = props => {
  return (
    <div className="">
      <Navigation />
      <main>
        <section className="section-intro">
          <h2 className="heading-secondary">Contact</h2>
          <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab magni praesentium ut nihil. Eius corrupti facilis nisi dignissimos esse sed, vel, fuga quas ipsum accusantium maiores incidunt! Excepturi, quas necessitatibus.</p>
        </section>
        <section className="section-contact">
          <div className="contact-details">
            <div className="heading-secondary">Contact Info</div>
            <div className="contact-details__phone"><i className="fa fa-phone icon" /><a href="tel:0422926053" className="link">0422 926 053</a></div>
            <div className="contact-details__email"><i className="fa fa-envelope icon" /><a href="mailto:twbcnorth@outlook.com" className="link">twbcnorth@outlook.com</a></div>
            <div className="contact-details__facebook"><i className="fa fa-facebook icon" />@<a href="https://www.facebook.com/twbcn/" className="link">twbcn</a></div>
          </div>
          <div className="contact-form">
            <Form title="Get in Touch" btnText="Send">
              <FormInput type="text" placeholder="Name" id="name"/>
              <FormInput type="text" placeholder="Email" id="eamil"/>
              <FormInput input="textarea" placeholder="Message" id="message"/>
            </Form>
          </div>
          
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default home;

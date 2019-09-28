import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Form from '../components/Form';
import FormInput from '../components/FormInput';

const register = props => {
  return (
    <div className="">
      <Navigation />
      <main>
        <section className="section-intro">
          <h2 className="heading-secondary">TWBC 2020 Conference Registration</h2>
          <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab magni praesentium ut nihil. Eius corrupti facilis nisi dignissimos esse sed, vel, fuga quas ipsum accusantium maiores incidunt! Excepturi, quas necessitatibus.</p>
        </section>
        <section className="section-form">
          <div className="register">
            <div className="register__form">
              <Form title="Register" btnText="Register">
                <FormInput type="text" placeholder="First Name" id="firstname"/>
                <FormInput type="text" placeholder="Last Name" id="lastname"/>
                <FormInput type="email" placeholder="Email" id="email"/>
                <FormInput type="tel" placeholder="Phone Number" id="phone"/>
                <FormInput type="text" placeholder="Church" id="church"/>
                <FormInput input="select" placeholder="Payment" id="payment" defaultValue="null">
                    <option value="null" disabled>Please Select</option>
                    <option value="dd">Direct deposit</option>
                    <option value="cip">Cheque in post</option>
                    <option value="ctc">Cash to committee member (please specify in comments)</option>
                </FormInput>
                <FormInput input="select" placeholder="Special Diet" id="diet" defaultValue="none">
                    <option value="none">None</option>
                    <option value="gf">Gluten free</option>
                    <option value="v">Vegetarian</option>
                </FormInput>
                <FormInput input="textarea" placeholder="Comments" id="comment"/>
              </Form>
            </div>  
            <div className="register__side">
              <ul className="list">
                <li className="list__item"><span className="u-bold-text">Early Bird:</span> $30 before June 10</li>
                <li className="list__item"><span className="u-bold-text">Standard:</span> $35 between 11-23 June</li>
                <li className="list__item"><span className="u-bold-text">Last Minute:</span> $40 from June 24</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default register;

import React from 'react';

import svgLogo from './assets/img/logo-secondary.png';

import Feature from './components/Feature';
import Card from './components/Card';
import Form from './components/Form';
import FormInput from './components/FormInput';
import Conference from './components/Conference';

import twbc15 from './assets/img/twbc15.png';
import twbc16 from './assets/img/twbc16.png';
import twbc17 from './assets/img/twbc17.png';
import twbc18 from './assets/img/twbc18.png';
import twbc19 from './assets/img/twbc19_alt.png';

const App = props => {
  return (
    <div className="App">
      <header className="header">
        <div className="header__logo">
          <img src={svgLogo} alt="Logo" className="logo" />
        </div>
        <div className="header__navigation">
          <ul className="header__list">
            <li className="header__item"><a href="/#" className="header__link">About</a></li>
            <li className="header__item"><a href="/#" className="header__link">Register</a></li>
            <li className="header__item"><a href="/#" className="header__link">Conferences</a></li>
            <li className="header__item"><a href="/#" className="header__link">Contact</a></li>
          </ul>
        </div>
      </header>

      <main>
        <section className="section-featured">
          <Feature heading="Tasmanian Women's Bible Conference">
            A day conference for women whose desire is to have thier minds, hearts and lives shaped by the Bible.
          </Feature>
        </section>
        <section className="section-actions">
          <div className="row">
              <div className="col-1-of-2">
                <Card heading="This years conference" btnText="Read more">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui velit ratione minus fugit ducimus. Reiciendis veritatis commodi.
                </Card>
              </div>
              <div className="col-1-of-2">
                <Card heading="Past conference talks" btnText="Talks">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui velit ratione minus fugit ducimus. Reiciendis veritatis commodi.
                </Card>
              </div>
          </div>
        </section>
      </main>

      {/* REGISTER */}
      <main>
        <section className="section-intro">
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab magni praesentium ut nihil. Eius corrupti facilis nisi dignissimos esse sed, vel, fuga quas ipsum accusantium maiores incidunt! Excepturi, quas necessitatibus.</p> */}
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

      {/* CONFERNECES */}
      <main>
        <section className="section-conferences">
          <Conference title="Staying Stong in the Lord" link="/#" date="29th June, 2019" img={twbc19} imgAlt="2019 brochure"/>
          <Conference title="Bloom: Bible Talks From Psalm 1" link="/#" date="16th June, 2018" img={twbc18} imgAlt="2018 brochure"/>
          <Conference title="Great Expectations: Destruction, Disapointment and Hope" link="/#" date="27th May, 2017" img={twbc17} imgAlt="2017 brochure"/>
          <Conference title="Women Who Pray" link="/#" date="14th May, 2016" img={twbc16} imgAlt="2016 brochure"/>
          <Conference title="The Essential Wardrobe" link="/#" date="2nd May, 2015" img={twbc15} imgAlt="2015 brochure"/>
        </section>
      </main>


      {/* CONTACT */}
      <main>
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


      <footer className="footer">
        <div className="footer__copyright">Copyright &copy; 2019 TWBC North. All rights reserved.</div>
        <div className="footer__author">Designed by: <a href="/#" className="footer__link">Cameron Clifford</a>, Hosted by: <a href="/#" className="footer__link">New Front Door</a></div>
      </footer>
    </div>
  );
}

export default App;

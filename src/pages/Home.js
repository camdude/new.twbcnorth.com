import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Feature from '../components/Feature';
import Card from '../components/Card';

const home = props => {
  return (
    <div className="">
      <Navigation />
      <main>
        <section className="section-featured">
          <Feature heading="Tasmanian Women's Bible Conference">
            A day conference for women whose desire is to have thier minds, hearts and lives shaped by the Bible.
          </Feature>
        </section>
        <section className="section-actions">
          <div className="row">
              <div className="col-1-of-2">
                <Card heading="This years conference" btnText="2020 Conference" link="/conferences">
                  Find out all the infomation for this years conference and then register.
                </Card>
              </div>
              <div className="col-1-of-2">
                <Card heading="Past conference talks" btnText="Listen" link="/talks">
                  Missed a conference or want to listen to the talks again. You can do that all here.
                </Card>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default home;

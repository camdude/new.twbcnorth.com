import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const about = props => {
  return (
    <div className="">
      <Navigation />
      <main>
        <section className="section-intro">
            <h2 className="heading-secondary">About</h2>
          <p className="paragraph">
            The Tasmanian Women's Bible Conference is a day conference for women whose desire is to have thier minds, hearts and lives shaped by the Bible.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default about;

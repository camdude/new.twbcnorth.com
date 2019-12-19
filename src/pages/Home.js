import React from "react";

import HomeLayout from "../layouts/HomeLayout";
import Hero from "../components/Hero";
import Card from "../components/UIElements/Card";

const Home = () => {
  return (
    <HomeLayout>
      <Hero heading="Tasmanian Women's Bible Conference">
        A day conference for women whose desire is to have their minds, hearts
        and lives shaped by the Bible.
      </Hero>
      <section className="section section-actions">
        <div className="row">
          <div className="col-1-of-2">
            <Card
              heading="This Years Conference"
              btnText="Register"
              link="/register"
            >
              Find out all the infomation for this years conference and then
              register for the conference.
            </Card>
          </div>
          <div className="col-1-of-2">
            <Card
              heading="Past Conference Talks"
              btnText="Listen"
              link="/conferences"
            >
              Missed a conference or want to listen to the talks again. You can
              do that all here.
            </Card>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Home;

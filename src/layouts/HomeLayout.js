import React, { useEffect } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

const HomeLayout = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home-layout">
      <Navigation />
      <div className="home-layout__body">{props.children}</div>
      <Footer />
    </main>
  );
};

export default HomeLayout;

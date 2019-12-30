import React, { useEffect } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

const MainLayout = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main-layout">
      <Navigation />
      <div className="main-layout__body">{props.children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;

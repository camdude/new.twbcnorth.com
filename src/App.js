import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Conferences from "./pages/Conferences";
import ConfPage from "./pages/ConfPage";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path="/conferences/:year" component={ConfPage} />
      <Route path="/conferences" component={Conferences} />
      <Route path="/register" component={Register} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;

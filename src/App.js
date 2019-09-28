import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Conferences from './pages/Conferences';
import Contact from './pages/Contact';

const App = props => {
  return (
    <div className="App">
      <Switch>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/conferences" exact component={Conferences}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/about" exact component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;

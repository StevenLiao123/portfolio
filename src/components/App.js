import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import Projects from './LandingPage/Body/Projects';
import AboutMe from './LandingPage/Body/AboutMe';
import Contact from './LandingPage/Body/Contact';
import Resume from './Resume';

class App extends Component {
  render(){
    let routes = (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={AboutMe} />
        <Route path="/contact" component={Contact} />
      </Switch>
    )

    return (
      <div className="App">
          {routes}
      </div>
    );
  }
}

export default App;

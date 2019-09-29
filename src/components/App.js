import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import Resume from './Resume';

class App extends Component {
  render(){
    let routes = (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/resume" component={Resume} />
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

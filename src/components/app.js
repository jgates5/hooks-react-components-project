import React, { Component } from 'react';
import Home from "./home";
import Alignment from "./hooksalignment"
import HideMe from "./hideMe"
import UporDown from "./upordown"
import CountPixels from "./countpixels"
import ColorMe from "./colorme"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Components with Hooks</h1>
        <Router>
          <div>
            <Home />
            <Switch>      
              <Route path="/hooksalignment" component={Alignment}>
              </Route>
              <Route path="/hideMe" component={HideMe}>
              </Route>
              <Route path="/upordown">
                <UporDown />
              </Route>
              <Route path="/countpixels">
                <CountPixels />
              </Route>
              <Route path="/colorme">
              <ColorMe />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import BlogsPage from './components/Pages/BlogsPage';
import CareersPage from './components/Pages/CareersPage';
import './App.scss';

class App extends Component {
  
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/blogs">
              <BlogsPage/>
            </Route>
            <Route path="/careers">
              <CareersPage/>
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import LandingPage from './components/landingPage';
import TestingPage from './components/testingPage';

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/test' component={TestingPage} />
    </div>
  </Router>
)
export default App;
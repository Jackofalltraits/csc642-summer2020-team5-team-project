import React from 'react';
import Trips from './components/trips/trips';
import CityScapeSignup from './components/cityScapeSignup/cityScapeSignup';
import DocentSignUp from './components/docentSignup/docentSignUp';
import CityScapeLogin from './components/cityScapeLogin/cityScapeLogin';
import DocentLogin from './components/docentLogin/docentLogin';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Trips} />
        <Route path='/about' component={Trips} />
        <Route path='/cityscapelogin' component={CityScapeLogin} />
        <Route path='/docentlogin' component={DocentLogin} />
        <Route path='/docentsignup' component={DocentSignUp} />
        <Route path='/cityscapesignup' component={CityScapeSignup} />
      </Switch>
    </Router>
  );
}

export default App;

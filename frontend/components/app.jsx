import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './shared/footer_container';
import Navbar from './shared/navbar_container';
import SplashContainer from './logged_out_home/splash_container';
import SessionFormContainer from './session/session_form_container';
import Home from './logged_in_home/home_container';

const App = ({ children }) => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path='/' component={SplashContainer} />
      <Route path='/home' component={Home}/>
    </Switch>
    <Footer />
  </div>
);

export default App;

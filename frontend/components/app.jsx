import React from 'react';
import { Route, Switch } from 'react-router-dom';

// custom components
import Navbar from './shared/navbar_container';
import Footer from './shared/footer_container';
import SplashContainer from './logged_out_home/splash_container';
import HomeContainer from './logged_in_home/home_container';
import GroupContainer from './group/group_show_container';
import GroupFormContainer from './group/group_create';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = ({ children }) => (
  <div>
    <Navbar />
    <Switch>
      <ProtectedRoute path='/home' component={HomeContainer}/>
      <ProtectedRoute path='/groups/new' component={GroupFormContainer}/>
      <ProtectedRoute path='/groups/:groupId' component={GroupContainer}/>
      <Route exact path='/' component={SplashContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;

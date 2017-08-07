import React from 'react';
import { Route, Switch } from 'react-router-dom';

// custom components

import Navbar from './shared/navbar_container';
import Footer from './shared/footer_container';
import SplashContainer from './logged_out_home/splash_container';
import HomeContainer from './logged_in_home/home_container';
import GroupContainer from './group/group_show_container';
import GroupFormContainer from './group/group_create';
import EventContainer from './event/event_show_container';
// import EventFormContainer from './event/event_create';
import UserProfile from './user_profile/user_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = ({ children }) => (
  <div>
    <Navbar />
    <Switch>
      <ProtectedRoute path='/profile/:userId' component={UserProfile} />
      <ProtectedRoute path='/profile/:userId/groups' component={UserProfile} />
      <ProtectedRoute path='/profile/:userId/events' component={UserProfile} />
      <ProtectedRoute path='/profile/:userId/streams' component={UserProfile} />
      <ProtectedRoute path='/home' component={HomeContainer}/>
      <ProtectedRoute path='/groups/new' component={GroupFormContainer}/>
      <Route path='/groups/:groupId/:groupName' component={GroupContainer}/>
      <Route path='/events/:eventId/:eventName' component={EventContainer}/>
      <Route exact path='/' component={SplashContainer} />
    </Switch>
    <Footer />
  </div>
);
// <ProtectedRoute path='/events/new' component={EventFormContainer}/>

export default App;

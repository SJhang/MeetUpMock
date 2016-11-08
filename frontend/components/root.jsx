import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import SplashContainer from './logged_out_home/splash_container';
import HomeContainer from './logged_in_home/home_container';
import GroupContainer from './group/group_container';
import EventContainer from './event/event_container';
import UserContainer from './user_profile/user_container';


const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser.username;
    console.log(currentUser, "logged in ensure");
    if (!currentUser) replace('/login');
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser.username;
    console.log(currentUser, "logged in redirect");
    if (currentUser) replace('/home');
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SplashContainer} />
          <Route path='/home' component={HomeContainer} onEnter={_ensureLoggedIn}>
            <IndexRoute component={GroupContainer} onEnter={_ensureLoggedIn} />
            <Route path='/events' component={EventContainer} onEnter={_ensureLoggedIn} />
            <Route path='/groups' component={GroupContainer} onEnter={_ensureLoggedIn} />
          </Route>
          <Route path='/groups/:groupId' component={GroupContainer} onEnter={_ensureLoggedIn}/>
          <Route path='/events/:eventId' component={EventContainer} />
          <Route path='/users/:userId' component={UserContainer} onEnter={_ensureLoggedIn}/>
        </Route>
        <Route path='/signup'
          component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path='/login'
          component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
      </Router>
    </Provider>
  );
};

export default Root;

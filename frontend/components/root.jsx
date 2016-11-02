import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import SplashContainer from './logged_out_home/splash_container';
import HomeContainer from './logged_in_home/home_container';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) replace('/login');
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) replace('/home');
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={SplashContainer}>
          <Route
            path='/signup'
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn}/>
          <Route
            path='/login'
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn} />
        </Route>
        <Route path='/home' component={App} onEnter={_ensureLoggedIn}>
          <IndexRoute component={HomeContainer} onEnter={_ensureLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

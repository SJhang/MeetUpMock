import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: {
          username: window.currentUser,
          id: window.currentUser.id
        },
        errors: []
      }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
  window.store = store;
});

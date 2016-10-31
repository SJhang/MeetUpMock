import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <h1>Meetups
      <GreetingContainer />
    </h1>
    { children }
  </div>
);

export default App;

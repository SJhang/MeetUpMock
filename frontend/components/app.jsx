import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Footer from './shared/footer';
import HomeContainer from './logged_in_home/home_container';

const App = ({ children }) => (
  <main>
    <HomeContainer />
    {children}
    <Footer />
  </main>
);

export default App;

import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Footer from './shared/footer';
import HeaderContainer from './shared/header_container';
import HomeContainer from './logged_in_home/home_container';

const App = ({ children }) => (
  <main>
    <HeaderContainer />
      {children}
    <Footer />
  </main>
);

export default App;

import React from 'react';
import Footer from './shared/footer';
import HeaderContainer from './shared/header_container';
import HomeContainer from './logged_in_home/home_container';

const App = ({ children }) => (
  <div className="app">
    <HeaderContainer />
      {children}
    <Footer />
  </div>
);

export default App;

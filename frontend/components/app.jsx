import React from 'react';
import FooterContainer from './shared/footer_container';
import HeaderContainer from './shared/header_container';
import HomeContainer from './logged_in_home/home_container';

const App = ({ children }) => (
  <div className="container-fluid">
    <HeaderContainer />
    <div className="container">
      {children}
    </div>
    <FooterContainer />
  </div>
);

export default App;

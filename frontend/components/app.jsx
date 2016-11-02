import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Footer from './shared/footer';
import Header from './shared/header';

const App = ({ children }) => (
  <main>
    <Header />
    { children }
    <Footer />
  </main>
);

export default App;

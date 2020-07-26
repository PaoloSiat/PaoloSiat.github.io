import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Profile, Contact, Footer, Header, NavigationBar, Portfolio, WorkExperience } from './components'

import 'semantic-ui-css/semantic.min.css'
import './css';


ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <NavigationBar />
    <div id='content'>
      <Header />
      <Profile />
      <Portfolio />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AboutMe, Contact, Footer, Header, NavigationBar, Portfolio, WorkExperience } from './components'

// Import the contents of the css files.
import 'semantic-ui-css/semantic.min.css'
import './css';

// Whatever gets rendered here gets rendered on the screen.
ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <NavigationBar />
    <div id='content'>
      <Header />
      <AboutMe />
      <Portfolio />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);

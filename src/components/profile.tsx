import React, { Component } from 'react';


interface BioProps {}
interface BioState {}

export default class Profile extends Component<BioProps, BioState> {
  render(): JSX.Element {
    return (
      <div id='profile'>
        <h1>PERSONAL PROFILE</h1>
        <p>
          I used to be a nurse but decided that I love designing and creating content more.
          I have been designing internationally for different companies for over 5 years. Also, I've been participating in differe group art exhibitions in the Philippines.
          Logos, Brochures, Company branding, Digital drawings, traditional drawings, etc.; you name it, I design it. Send me a message, Let's talk!
        </p>
      </div>
    );
  }
}

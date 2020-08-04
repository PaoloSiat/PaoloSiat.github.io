import React, { Component } from 'react';


// The data that the Portfolio class manages.
interface AboutMeProps {}
interface AboutMeState {
  aboutMeText: string;
}

// Rendering is done in HTML and returns what this class what actually look like on the screen.
export default class AboutMe extends Component<AboutMeProps, AboutMeState> {
  constructor (props: AboutMeProps) {
    super(props);

    this.state = {
      aboutMeText: ''
    }

    // Grab the text content of the file and parse it in to a class variable.
    fetch('aboutMe.txt')
    .then(data => data.text())
    .then(text => { this.setState({ aboutMeText: text }, () => console.log(this.state.aboutMeText)) });
  }

  render(): JSX.Element {
    return (
      <div id='about-me'>
        <h1>ABOUT ME</h1>
        <p>{this.state.aboutMeText}</p>
      </div>
    );
  }
}

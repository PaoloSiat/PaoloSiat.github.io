import React, { Component } from 'react';


// The data that the Portfolio class manages.
interface AboutMeProps {
  siteData: ISiteData;
}
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
    fetch(this.props.siteData.siteInformation.aboutMeTextFile)
    .then(data => data.text())
    .then(text => { this.setState({ aboutMeText: text }); });
  }

  render(): JSX.Element {
    return (
      <div id='about-me'>
        <h1 className='unselectable'>{this.props.siteData.siteStructure.aboutMeTitle}</h1>
        <p>{this.state.aboutMeText}</p>
      </div>
    );
  }
}

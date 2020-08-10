import React, { Component } from 'react';
import { scrollToContentLocation } from '../utility';


// The data that the Contact class manages.
interface FooterProps {
  siteData: ISiteData;
}
interface FooterState {}

export default class Footer extends Component<FooterProps, FooterState> {
  // Rendering is done in HTML and returns what this class what actually look like on the screen.
  render(): JSX.Element {
    return (
      <div id='footer' className='unselectable'>
        <div>
          <div>{this.props.siteData.siteInformation.copyrightMessage}</div>
          <div id='back-to-top' onClick={() => scrollToContentLocation(0, 0)}>▲ {this.props.siteData.siteStructure.backToTopText}</div>
        </div>
      </div>
    );
  }
}

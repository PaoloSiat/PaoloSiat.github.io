import React, { Component } from 'react';


// The data that the Contact class manages.
interface HeaderProps {}
interface HeaderState {}

export default class Header extends Component<HeaderProps, HeaderState> {
   // Rendering is done in HTML and returns what this class what actually look like on the screen.
  render(): JSX.Element {
    return (
      <div id='header'>
        <div id='header-name' className='unselectable'>
          <h1>PAOLO SIAT</h1>
          <h2>Multimedia Artist</h2>
        </div>
      </div>
    );
  }
}

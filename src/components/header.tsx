import React, { Component } from 'react';


interface HeaderProps {}
interface HeaderState {}

export default class Header extends Component<HeaderProps, HeaderState> {
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

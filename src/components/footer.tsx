import React, { Component } from 'react';
import { scrollToContentLocation } from '../utility';


interface FooterProps {}
interface FooterState {}

export default class Footer extends Component<FooterProps, FooterState> {
  render(): JSX.Element {
    return (
      <div id='footer' className='unselectable'>
        <div>© 2020 Paolo Siat. All rights reserved</div>
        <div id='back-to-top' onClick={() => scrollToContentLocation(0, 0)}>▲ Back to Top</div>
      </div>
    );
  }
}

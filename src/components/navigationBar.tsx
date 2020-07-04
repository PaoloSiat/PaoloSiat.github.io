import React, { Component } from 'react';
import { scrollToContentChild } from '../utility';


interface NavigationBarProps {}
interface NavigationBarState {}

export default class NavigationBar extends Component<NavigationBarProps, NavigationBarState> {
  render(): JSX.Element {
    return (
      <div id='navigation-bar' className='unselectable'>
        <ul>
          <li onClick={() => scrollToContentChild('profile')}>PROFILE</li>
          <li onClick={() => scrollToContentChild('portfolio')}>PORTFOLIO</li>
          <li onClick={() => scrollToContentChild('work-experience')}>WORK EXPERIENCE</li>
          <li onClick={() => scrollToContentChild('contact')}>CONTACT</li>
        </ul>
      </div>
    );
  }
}

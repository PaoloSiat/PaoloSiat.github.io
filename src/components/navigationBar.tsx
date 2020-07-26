import React, { Component } from 'react';
import { scrollToContentChild } from '../utility';


interface NavigationBarProps {}
interface NavigationBarState {}

export default class NavigationBar extends Component<NavigationBarProps, NavigationBarState> {
  constructor(props: NavigationBarProps) {
    super(props);

    window.addEventListener('resize', this.onResize);
  }

  onResize(): void {
    let navigationElement = document.getElementById('navigation-vertical');

    if (navigationElement && document.body.getBoundingClientRect().width >= 576) navigationElement.style.display = 'none';
  }

  toggleVerticalNavigation(): void {
    let navigationElement = document.getElementById('navigation-vertical');

    if (navigationElement && navigationElement.style.display !== 'flex') navigationElement.style.display = 'flex';
    else if (navigationElement) navigationElement.style.display = 'none';
  }

  render(): JSX.Element {
    return (
      <div id='navigation-bar' className='unselectable'>
        <div id='navigation-toggle' onClick={() => this.toggleVerticalNavigation()}><i className="fa fa-bars" aria-hidden="true"></i></div>
        <ul id='navigation-horizontal'>
          <li onClick={() => scrollToContentChild('profile')}>PROFILE</li>
          <li onClick={() => scrollToContentChild('portfolio')}>PORTFOLIO</li>
          <li onClick={() => scrollToContentChild('work-experience')}>WORK EXPERIENCE</li>
          <li onClick={() => scrollToContentChild('contact')}>CONTACT</li>
        </ul>
        <ul id='navigation-vertical'>
          <li onClick={() => scrollToContentChild('profile')}>PROFILE</li>
          <li onClick={() => scrollToContentChild('portfolio')}>PORTFOLIO</li>
          <li onClick={() => scrollToContentChild('work-experience')}>WORK EXPERIENCE</li>
          <li onClick={() => scrollToContentChild('contact')}>CONTACT</li>
        </ul>
      </div>
    );
  }
}

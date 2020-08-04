import React, { Component } from 'react';
import { scrollToContentChild } from '../utility';


// The data that the Contact class manages.
interface NavigationBarProps {}
interface NavigationBarState {}

export default class NavigationBar extends Component<NavigationBarProps, NavigationBarState> {
  // This function runs when the class is created.
  constructor(props: NavigationBarProps) {
    super(props);

    // Bind the onResize function to the event that triggers every time the windows resizes.
    window.addEventListener('resize', this.onResize);
  }

  onResize(): void {
    // If the window is wider than 576 pixels then hide the vertical navigation menu.
    let navigationElement = document.getElementById('navigation-vertical');

    if (navigationElement && document.body.getBoundingClientRect().width >= 576) navigationElement.style.display = 'none';
  }

  toggleVerticalNavigation(): void {
    // Toggle the visibility of the vertical navigation menu.
    let navigationElement = document.getElementById('navigation-vertical');

    if (navigationElement && navigationElement.style.display !== 'flex') navigationElement.style.display = 'flex';
    else if (navigationElement) navigationElement.style.display = 'none';
  }

   // Rendering is done in HTML and returns what this class what actually look like on the screen.
  render(): JSX.Element {
    return (
      <div id='navigation-bar' className='unselectable'>
        <div id='navigation-toggle' onClick={() => this.toggleVerticalNavigation()}>≡</div>
        <ul id='navigation-horizontal'>
          <li onClick={() => scrollToContentChild('about-me')}>ABOUT ME</li>
          <li onClick={() => scrollToContentChild('portfolio')}>PORTFOLIO</li>
          <li onClick={() => scrollToContentChild('work-experience')}>WORK EXPERIENCE</li>
          <li onClick={() => scrollToContentChild('contact')}>CONTACT</li>
        </ul>
        <ul id='navigation-vertical' style={{ display: 'none' }}>
          <li onClick={() => scrollToContentChild('about-me')}>ABOUT ME</li>
          <li onClick={() => scrollToContentChild('portfolio')}>PORTFOLIO</li>
          <li onClick={() => scrollToContentChild('work-experience')}>WORK EXPERIENCE</li>
          <li onClick={() => scrollToContentChild('contact')}>CONTACT</li>
        </ul>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { scrollToContentChild } from '../utility';


// The data that the Contact class manages.
interface NavigationBarProps {
  siteData: ISiteData;
}
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
        <div id='navigation-horizontal'>
          <div onClick={() => scrollToContentChild('about-me')}>{this.props.siteData.siteStructure.navigationAboutMeTitle}</div>
          <div onClick={() => scrollToContentChild('portfolio')}>{this.props.siteData.siteStructure.navigationPortfolioTitle}</div>
          <div onClick={() => scrollToContentChild('work-experience')}>{this.props.siteData.siteStructure.navigationWorkExperienceTitle}</div>
          <div onClick={() => scrollToContentChild('contact')}>{this.props.siteData.siteStructure.navigationContactTitle}</div>
        </div>
        <div id='navigation-vertical' style={{ display: 'none' }}>
          <div onClick={() => scrollToContentChild('about-me')}>{this.props.siteData.siteStructure.navigationAboutMeTitle}</div>
          <div onClick={() => scrollToContentChild('portfolio')}>{this.props.siteData.siteStructure.navigationPortfolioTitle}</div>
          <div onClick={() => scrollToContentChild('work-experience')}>{this.props.siteData.siteStructure.navigationWorkExperienceTitle}</div>
          <div onClick={() => scrollToContentChild('contact')}>{this.props.siteData.siteStructure.navigationContactTitle}</div>
        </div>
      </div>
    );
  }
}

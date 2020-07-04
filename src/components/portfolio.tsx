import React, { Component } from 'react';


enum PortfolioCategory {
  digital = 1,
  traditional,
  others
}

interface PortfolioProps {}
interface PortfolioState {
  currentCategory: PortfolioCategory;
}

export default class Portfolio extends Component<PortfolioProps, PortfolioState> {
  constructor(props: PortfolioProps) {
    super(props);

    this.state = {
      currentCategory: PortfolioCategory.digital
    }
  }

  render(): JSX.Element {
    return (
      <div id='portfolio'>
        <div id='portfolio-selector'>
          <h1 className='unselectable'>PORTFOLIO<span className='unselectable'> ►</span></h1>
          <button className='unselectable' style={{ textDecorationColor: this.state.currentCategory === PortfolioCategory.digital ? '#feb312' : '#495551' }}
            onClick={() => this.setState({ currentCategory: PortfolioCategory.digital })}>DIGITAL</button>
          <button className='unselectable' style={{ textDecorationColor: this.state.currentCategory === PortfolioCategory.traditional ? '#feb312' : '#495551' }}
            onClick={() => this.setState({ currentCategory: PortfolioCategory.traditional })}>TRADITIONAL</button>
          <button className='unselectable' style={{ textDecorationColor: this.state.currentCategory === PortfolioCategory.others ? '#feb312' : '#495551' }}
            onClick={() => this.setState({ currentCategory: PortfolioCategory.others })}>OTHERS</button>
        </div>
        <div id='portfolio-content'>
          <div id='portfolio-digital' style={{ display: this.state.currentCategory === PortfolioCategory.digital ? 'block' : 'none' }}>
            DIGITAL CONTENT
          </div>
          <div id='portfolio-traditional' style={{ display: this.state.currentCategory === PortfolioCategory.traditional ? 'block' : 'none' }}>
            TRADITIONAL CONTENT
          </div>
          <div id='portfolio-others' style={{ display: this.state.currentCategory === PortfolioCategory.others ? 'block' : 'none' }}>
            OTHERS CONTENT
          </div>
        </div>
      </div>
    );
  }
}

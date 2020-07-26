import React, { Component } from 'react';
import MobileDetect from 'mobile-detect';
import Carousel from 'react-multi-carousel';
import { Image } from 'semantic-ui-react';

import 'react-multi-carousel/lib/styles.css';


enum PortfolioCategory {
  architectural = 1,
  digitalArt,
  digitalDesigns,
  logos,
  print,
  traditionalArt,
  others
}

interface IPortfolioCategory {
  name: string;
  images: string[];
}

interface PortfolioProps {}
interface PortfolioState {
  currentCategory: PortfolioCategory;
  portfolioData: IPortfolioCategory[];
}

export default class Portfolio extends Component<PortfolioProps, PortfolioState> {
  private deviceType: string;

  constructor(props: PortfolioProps) {
    super(props);

    this.state = {
      currentCategory: PortfolioCategory.architectural,
      portfolioData: []
    }

    let userAgent = navigator.userAgent;
    
    let md = new MobileDetect(userAgent);

    if (md.tablet()) {
      this.deviceType = 'tablet';
    } else if (md.mobile()) {
      this.deviceType = 'mobile';
    } else {
      this.deviceType = 'desktop';
    }

    fetch('portfolio.json')
    .then(data => data.text())
    .then(text => {
      this.setState({ portfolioData: JSON.parse(text).categories })
    });
  }

  getImagesFromCategory(category: string): JSX.Element {
    let result: JSX.Element;
    let images: JSX.Element[] = [];
    let responsive = {
      desktop: {
        breakpoint: { max: 5000, min: 992 },
        items: 4,
        slidesToSlide: 1
      },
      tablet: {
        breakpoint: { max: 992, min: 576 },
        items: 2,
        slidesToSlide: 1
      },
      mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    };

    for (let categoryData of this.state.portfolioData) {
      if (category === categoryData.name) {
        for (let image of categoryData.images) {
          let path = `images/${categoryData.name}/${image}`;

          images.push(<div key={path} className='portfolio-image-container'>
            <Image src={path} alt={path} className='portfolio-image' fluid={true} draggable={false} onClick={() => document.body.style.backgroundColor = '#ffffff'} />
          </div>);
        }

        responsive.desktop.items = Math.min(Math.max(responsive.desktop.items, 0), images.length);
        responsive.tablet.items = Math.min(Math.max(responsive.tablet.items, 0), images.length);
        responsive.mobile.items = Math.min(Math.max(responsive.mobile.items, 0), images.length);
      }
    }

    result = <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      containerClass='portfolio-container'
      deviceType={this.deviceType}
      dotListClass='portfolio-dots'
      itemClass='portfolio-items'
    >
      {images}
    </Carousel>

    return result;
  }

  render(): JSX.Element {
    return (
      <div id='portfolio'>
        <div id='portfolio-selector'>
          <h1 className='unselectable'>PORTFOLIO<span className='unselectable'> ►</span></h1>
          <div id='portfolio-buttons'>
            <button className='unselectable' style={{ textDecorationColor: this.state.currentCategory === PortfolioCategory.architectural ? '#feb312' : '#495551' }}
              onClick={() => this.setState({ currentCategory: PortfolioCategory.architectural })}>ARCHITECTURAL</button>
            <button className='unselectable' style={{ textDecorationColor: this.state.currentCategory === PortfolioCategory.digitalArt ? '#feb312' : '#495551' }}
              onClick={() => this.setState({ currentCategory: PortfolioCategory.digitalArt })}>DIGITAL ART</button>
            <button className='unselectable' style={{ textDecorationColor: this.state.currentCategory === PortfolioCategory.digitalDesigns ? '#feb312' : '#495551' }}
              onClick={() => this.setState({ currentCategory: PortfolioCategory.digitalDesigns })}>DIGITAL DESIGNS</button>
            <button className='unselectable' style={{ textDecorationColor: this.state.currentCategory === PortfolioCategory.logos ? '#feb312' : '#495551' }}
              onClick={() => this.setState({ currentCategory: PortfolioCategory.logos })}>LOGOS</button>
            <button className='unselectable' style={{ textDecorationColor: this.state.currentCategory === PortfolioCategory.print ? '#feb312' : '#495551' }}
              onClick={() => this.setState({ currentCategory: PortfolioCategory.print })}>PRINT</button>
            <button className='unselectable' style={{ textDecorationColor: this.state.currentCategory === PortfolioCategory.traditionalArt ? '#feb312' : '#495551' }}
              onClick={() => this.setState({ currentCategory: PortfolioCategory.traditionalArt })}>TRADITIONAL ART</button>
            <button className='unselectable' style={{ textDecorationColor: this.state.currentCategory === PortfolioCategory.others ? '#feb312' : '#495551' }}
              onClick={() => this.setState({ currentCategory: PortfolioCategory.others })}>OTHERS</button>
          </div>
        </div>
        <div id='portfolio-content'>
          <div id='portfolio-architectural' style={{ display: this.state.currentCategory === PortfolioCategory.architectural ? 'block' : 'none' }}>
            {this.getImagesFromCategory('architectural')}
          </div>
          <div id='portfolio-digital-art' style={{ display: this.state.currentCategory === PortfolioCategory.digitalArt ? 'block' : 'none' }}>
            {this.getImagesFromCategory('digital-art')}
          </div>
          <div id='portfolio-digital-designs' style={{ display: this.state.currentCategory === PortfolioCategory.digitalDesigns ? 'block' : 'none' }}>
            {this.getImagesFromCategory('digital-designs')}
          </div>
          <div id='portfolio-logos' style={{ display: this.state.currentCategory === PortfolioCategory.logos ? 'block' : 'none' }}>
              {this.getImagesFromCategory('logos')}
          </div>
          <div id='portfolio-print' style={{ display: this.state.currentCategory === PortfolioCategory.print ? 'block' : 'none' }}>
              {this.getImagesFromCategory('print')}
          </div>
          <div id='portfolio-traditional' style={{ display: this.state.currentCategory === PortfolioCategory.traditionalArt ? 'block' : 'none' }}>
            {this.getImagesFromCategory('traditional-art')}
          </div>
          <div id='portfolio-others' style={{ display: this.state.currentCategory === PortfolioCategory.others ? 'block' : 'none' }}>
            {this.getImagesFromCategory('others')}
          </div>
        </div>
      </div>
    );
  }
}

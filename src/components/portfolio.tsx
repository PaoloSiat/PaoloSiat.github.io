import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';


// These are the available categories as a type that can be used.
enum PortfolioCategory {
  graphicDesign = 1,
  illustrations,
  traditional
}

// What defines a category as being a category.
interface IPortfolioCategory {
  name: string;
  images: string[];
}

// The data that the Portfolio class manages.
interface PortfolioProps {}
interface PortfolioState {
  currentCategory: PortfolioCategory;
  portfolioData: IPortfolioCategory[];
}

export default class Portfolio extends Component<PortfolioProps, PortfolioState> {
  // This function runs when the class is created.
  constructor(props: PortfolioProps) {
    super(props);

    // Set default data.
    this.state = {
      currentCategory: PortfolioCategory.graphicDesign,
      portfolioData: []
    }

    // Grab the text content of the file and parse it in to a class variable.
    fetch('portfolio.json')
    .then(data => data.text())
    .then(text => {
      this.setState({ portfolioData: JSON.parse(text).categories })
    });
  }

  getImagesFromCategory(category: string): JSX.Element{
    let result: JSX.Element;
    let images: JSX.Element[] = [];

    // Loop through loaded data and match the input category name and the 
    for (let categoryData of this.state.portfolioData) {
      if (category === categoryData.name) {
        // Loop through the images that are in the matched category to create and add them to the images list.
        for (let image of categoryData.images) {
          let path = `images/${categoryData.name}/${image}`;

          // Create an image element using using the information from the data and bind a click event to it.
          images.push(
            <Image key={path} src={path} alt={path} className='portfolio-image' fluid={true} draggable={false} onClick={() => console.log('tried to open image')} />
          );
        }
      }
    }

    // Wrap the images in a container element.
    result = <div id='portfolio-container'>{images}</div >

    return result;
  }

  // Rendering is done in HTML and returns what this class what actually look like on the screen.
  render(): JSX.Element {
    return (
      <div id='portfolio'>
        <div id='portfolio-selector'>
          <h1 className='unselectable'>PORTFOLIO<span className='unselectable'> ►</span></h1>
          <div id='portfolio-buttons'>
            <button className='unselectable' style={{ textDecorationColor: this.state.currentCategory === PortfolioCategory.graphicDesign ? '#feb312' : '#495551' }}
              onClick={() => this.setState({ currentCategory: PortfolioCategory.graphicDesign })}>GRAPHIC DESIGN</button>
            <button className='unselectable' style={{ textDecorationColor: this.state.currentCategory === PortfolioCategory.illustrations ? '#feb312' : '#495551' }}
              onClick={() => this.setState({ currentCategory: PortfolioCategory.illustrations })}>ILLUSTRATIONS</button>
            <button className='unselectable' style={{ textDecorationColor: this.state.currentCategory === PortfolioCategory.traditional ? '#feb312' : '#495551' }}
              onClick={() => this.setState({ currentCategory: PortfolioCategory.traditional })}>TRADITIONAL</button>
          </div>
        </div>
        <div id='portfolio-content'>
          <div id='portfolio-graphic-design' style={{ display: this.state.currentCategory === PortfolioCategory.graphicDesign ? 'block' : 'none' }}>
            {this.getImagesFromCategory('graphic-design')}
          </div>
          <div id='portfolio-illustrations' style={{ display: this.state.currentCategory === PortfolioCategory.illustrations ? 'block' : 'none' }}>
            {this.getImagesFromCategory('illustrations')}
          </div>
          <div id='portfolio-traditional' style={{ display: this.state.currentCategory === PortfolioCategory.traditional ? 'block' : 'none' }}>
            {this.getImagesFromCategory('traditional')}
          </div>
        </div>
      </div>
    );
  }
}

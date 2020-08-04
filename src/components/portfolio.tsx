import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';


// What defines a category as being a category.
interface IPortfolioCategory {
  name: string;
  title: string;
  visible: boolean;
  images: string[];
}

// The data that the Portfolio class manages.
interface PortfolioProps {}
interface PortfolioState {
  portfolioData: IPortfolioCategory[];
}

export default class Portfolio extends Component<PortfolioProps, PortfolioState> {
  // This function runs when the class is created.
  constructor(props: PortfolioProps) {
    super(props);

    // Set default data.
    this.state = {
      portfolioData: []
    }

    // Grab the text content of the file and parse it in to a class variable.
    fetch('portfolio.json')
    .then(data => data.text())
    .then(text => {
      this.setState({ portfolioData: JSON.parse(text).categories })
    });
  }

  // This function makes it possible to create a section of HTML code that is reusable and uses the category parameter to change content.
  getImagesFromCategory(category: string): JSX.Element[] {
    let result: JSX.Element[] = [];
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

        result.push(<div key='selector' className='portfolio-selector'>
          <h2>{categoryData.title}</h2>
          <div onClick={() => {
            let element = document.getElementById(`portfolio-content-${categoryData.name}`);

            if (categoryData.visible && element) element.style.display = 'none';
            else if (element) element.style.display = 'flex'; 
            categoryData.visible = !categoryData.visible

            this.forceUpdate();
          }}>
            {categoryData.visible ? '▲' : '▼'}
          </div>
        </div>);

        // Wrap the images in a container element and add it to the result.
        result.push(<div key='images' id={`portfolio-content-${categoryData.name}`} className='portfolio-content' style={{ display: 'none' }}>{images}</div >);
      }
    }
    return result;
  }

  // Rendering is done in HTML and returns what this class what actually look like on the screen.
  render(): JSX.Element {
    return (
      <div id='portfolio' className='unselectable'>
        <h1 className='unselectable'>PORTFOLIO</h1>
        <div id='portfolio-graphic-design' className='portfolio-container'>
          {this.getImagesFromCategory('graphic-design')}
        </div>
        <div id='portfolio-illustrations' className='portfolio-container'>
          {this.getImagesFromCategory('illustrations')}
        </div>
        <div id='portfolio-traditional' className='portfolio-container'>
          {this.getImagesFromCategory('traditional')}
        </div>
      </div>
    );
  }
}

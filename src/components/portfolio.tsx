import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import FullscreenImage from './fullscreenImage';


// The data that the Portfolio class manages.
interface PortfolioProps {
  siteData: ISiteData;
}
interface PortfolioState {
  fullscreenImageIndex: number;
  fullscreenCurrentCategoryData: IPortfolioCategory | null;
}

export default class Portfolio extends Component<PortfolioProps, PortfolioState> {
  // This function runs when the class is created.
  constructor(props: PortfolioProps) {
    super(props);

    // Set default data.
    this.state = {
      fullscreenImageIndex: 0,
      fullscreenCurrentCategoryData: null
    }
  }

  // Creates a full screen image element that shows on top of the site.
  openFullscreenImage(categoryData: IPortfolioCategory | null, index: number): void {
    if(categoryData) {
      index = Math.min(Math.max(index, 0), categoryData?.images.length - 1);

      this.setState({ fullscreenCurrentCategoryData: categoryData, fullscreenImageIndex: index });
    }
  }

  // This function makes it possible to create a section of HTML code that is reusable and uses the category parameter to change content.
  getImagesFromCategory(category: string): JSX.Element[] {
    let result: JSX.Element[] = [];
    let images: JSX.Element[] = [];

    // Loop through loaded data and match the input category name and the 
    for (let categoryData of this.props.siteData.portfolioCategories) {
      if (category === categoryData.name) {
        // Loop through the images that are in the matched category to create and add them to the images list.
        for (let image in categoryData.images) {
          let path = `images/${categoryData.name}/${categoryData.images[image]}`;
          
          // Create an image element using using the information from the data and bind a click event to it.
          images.push(
            <Image key={path} src={path} alt={`portfolio image for: ${path}`} className='portfolio-image' fluid={true} draggable={false} onClick={() => this.openFullscreenImage(categoryData, parseInt(image))} />
          );
        }

        result.push(
        <div key='selector' className='portfolio-selector'  onClick={() => {
          let element = document.getElementById(`portfolio-content-${categoryData.name}`);

          if (categoryData.visible && element) element.style.display = 'none';
          else if (element) element.style.display = 'flex'; 
          categoryData.visible = !categoryData.visible

          this.forceUpdate();
        }}>
          <h2>{categoryData.title}</h2>
          <div>
            {categoryData.visible ? '▲' : '▼'}
          </div>
        </div>
        );

        // Wrap the images in a container element and add it to the result.
        result.push(<div key='images' id={`portfolio-content-${categoryData.name}`} className='portfolio-content' style={{ display: 'none' }}>{images}</div >);
      }
    }
    
    return result;
  }

  // Rendering is done in HTML and returns what this class what actually look like on the screen.
  render(): JSX.Element {
    let portfolioElements = [];

    for (let categoryData of this.props.siteData.portfolioCategories) {
      portfolioElements.push(
        <div key={categoryData.name} id={`portfolio-${categoryData.name}`} className='portfolio-container'>
          {this.getImagesFromCategory(categoryData.name)}
        </div>
      );
    }

    return (
      <div id='portfolio' className='unselectable'>
        <h1 className='unselectable'>{this.props.siteData.siteStructure.portfolioTitle}</h1>
        {portfolioElements}
        <FullscreenImage parent={this} />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Portfolio from './portfolio';


interface IFullscreenImageProps {
  parent: Portfolio;
}
interface IFullscreenImageState {}


export default class FullscreenImage extends Component<IFullscreenImageProps, IFullscreenImageState> {
  render(): JSX.Element {
    let path = `images/${this.props.parent.state.fullscreenCurrentCategoryData?.name}/${this.props.parent.state.fullscreenCurrentCategoryData?.images[this.props.parent.state.fullscreenImageIndex]}`;

    return(
      <div id='fullscreen-image' onClick={() => {this.props.parent.setState({ fullscreenCurrentCategoryData: null, fullscreenImageIndex: 0 })}} style={{ display: this.props.parent.state.fullscreenCurrentCategoryData !== null ? 'flex' : 'none' }}>
        <div id='fullscreen-close'>×</div>
        <div className='fullscreen-arrow' onClick={(event) => { event.stopPropagation(); this.props.parent.openFullscreenImage(this.props.parent.state.fullscreenCurrentCategoryData, this.props.parent.state.fullscreenImageIndex - 1) }}><i className='fas fa-angle-double-left'></i></div>
        <Image src={path} alt={`fullscreen portfolio image for: ${path}`} fluid={true} draggable={false} onClick={(event: any) => { event.stopPropagation(); }} />
        <div className='fullscreen-arrow' onClick={(event) => { event.stopPropagation(); this.props.parent.openFullscreenImage(this.props.parent.state.fullscreenCurrentCategoryData, this.props.parent.state.fullscreenImageIndex + 1) }}><i className='fas fa-angle-double-right'></i></div>
      </div>
    );
  }
}

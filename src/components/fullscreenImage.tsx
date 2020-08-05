import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Portfolio from './portfolio';


interface IFullscreenImageProps {
  parent: Portfolio;
}
interface IFullscreenImageState {}


export default class FullscreenImage extends Component<IFullscreenImageProps, IFullscreenImageState> {
  render(): JSX.Element {
    return(
      <div id='fullscreen-image' onClick={() => {this.props.parent.setState({ currentFullscreenImage: '' })}} style={{ display: this.props.parent.state.currentFullscreenImage !== '' ? 'flex' : 'none' }}>
        <div id='fullscreen-close'>×</div>
        <Image src={this.props.parent.state.currentFullscreenImage} alt={`fullscreen portfolio image for: ${this.props.parent.state.currentFullscreenImage}`} fluid={true} draggable={false} />
      </div>
    );
  }
}

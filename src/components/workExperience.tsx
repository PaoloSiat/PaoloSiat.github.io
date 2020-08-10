import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';


// The data that the Portfolio class manages.
interface WorkExperienceProps {
  siteData: ISiteData;
}
interface WorkExperienceState {
  visible: boolean;
  content: string;
}

// Rendering is done in HTML and returns what this class what actually look like on the screen.
export default class WorkExperience extends Component<WorkExperienceProps, WorkExperienceState> {
  // This function runs when the class is created.
  constructor(props: WorkExperienceProps) {
    super(props);

    // Set default data.
    this.state = {
      visible: false,
      content: ''
    };
  }

  // This function runs when the class is added to the screen.
  componentDidMount(): void {
    // Define a function that loads content out of a file and returns the text.
    let loadFile = async (file: string) => {
      let response = await fetch(`/${file.trim()}`);
      
      return response.text();
    }

    // Load the file and set the content variable to contain that data.
    loadFile(this.props.siteData.siteInformation.workExperienceFile).then(data => {
      this.setState({ content: data });
    });
  }

  toggleWorkExperience(): void {
    // Toggle visibility of the work experience content.
    this.setState({ visible: !this.state.visible }, () => {
      let workExperienceContent = document.getElementById('work-experience-content');

      if (workExperienceContent && this.state.visible)
      {
        workExperienceContent.style.display = 'block';
      }
      else if (workExperienceContent)
      {
        workExperienceContent.style.display = 'none';
      }
    });
  }

  // Rendering is done in HTML and returns what this class what actually look like on the screen.
  render(): JSX.Element {
    return (
      <div id='work-experience' className={this.state.visible ? 'work-experience-opened' : ''}>
        <div id='work-experience-toggle' className='unselectable' onClick={() => this.toggleWorkExperience()}>
          <h1>{this.props.siteData.siteStructure.workExperienceTitle}</h1>
          <div>{this.state.visible ? '▲' : '▼'}</div>
        </div>
        <div id='work-experience-content' style={{ display: 'none' }}>
          <Markdown>{this.state.content}</Markdown>
        </div>
      </div>
    );
  }
}

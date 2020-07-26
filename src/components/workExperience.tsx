import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';


interface WorkExperienceProps {}
interface WorkExperienceState {
  visible: boolean;
  content: string;
}

export default class WorkExperience extends Component<WorkExperienceProps, WorkExperienceState> {
  constructor(props: WorkExperienceProps) {
    super(props);

    this.state = {
      visible: false,
      content: ''
    };
  }

  componentDidMount(): void {
    let loadFile = async (file: string) => {
      let response = await fetch(`/${file.trim()}`);
      
      return response.text();
    }

    loadFile('work-experience.md').then(data => {
      this.setState({ content: data });
    });
  }

  toggleWorkExperience(): void {
    this.setState({ visible: !this.state.visible }, () => {
      let workExperienceContent = document.getElementById('work-experience-content');

      if (workExperienceContent && this.state.visible) workExperienceContent.style.display = 'block';
      else if (workExperienceContent) workExperienceContent.style.display = 'none';
    });
  }

  render(): JSX.Element {
    return (
      <div id='work-experience'>
        <div id='work-experience-toggle'>
          <h1>WORK EXPERIENCE</h1>
          <button className='unselectable' onClick={() => this.toggleWorkExperience()}>{this.state.visible ? '▲' : '▼'}</button>
        </div>
        <div id='work-experience-content' style={{ display: 'none' }}>
          <Markdown>{this.state.content}</Markdown>
        </div>
      </div>
    );
  }
}

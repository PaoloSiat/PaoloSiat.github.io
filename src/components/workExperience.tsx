import React, { Component } from 'react';


interface WorkExperienceProps {}
interface WorkExperienceState {
  visible: boolean;
}

export default class WorkExperience extends Component<WorkExperienceProps, WorkExperienceState> {
  constructor(props: WorkExperienceProps) {
    super(props);

    this.state = {
      visible: false
    };
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
          WORK EXPERIENCE CONTENT
        </div>
      </div>
    );
  }
}

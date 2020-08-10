import React, { Component } from 'react';


// The data that the Contact class manages.
interface ContactProps {
  siteData: ISiteData;
}
interface ContactState {
  status: string;
}

export default class Contact extends Component<ContactProps, ContactState> {
  // This function runs when the class is created.
  constructor(props: ContactProps) {
    super(props);

    // Set default data.
    this.state = {
      status: ''
    };

    // Bind the submit form event to the submit form function.
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event: any): void {
    // Process and send the data submitted to the website that sends the email.
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  // Rendering is done in HTML and returns what this class what actually look like on the screen.
  render(): JSX.Element {
    return (
      <div id='contact'>
        <div id='contact-information'>
          <h1>{this.props.siteData.siteStructure.contactInformationTitle}</h1>
          <p><strong>{this.props.siteData.siteInformation.contactFullName}</strong><br />{this.props.siteData.siteInformation.contactJobTitle}<br />
            Phone: <span className='dark'>{this.props.siteData.siteInformation.contactPhone}</span><br />
            E-mail: <span className='dark'>{this.props.siteData.siteInformation.contactEmail}</span></p>
          <div id='social-media-icons'>
            <a href={this.props.siteData.siteInformation.socialInstagramLink} className='fa-layers fa-2x'rel='noopener noreferrer' target='_blank'>
							<i className='fab fa-instagram'></i>
						</a>
            <a href={this.props.siteData.siteInformation.socialYoutubeLink} className='fa-layers fa-2x' rel='noopener noreferrer' target='_blank'>
							<i className="fab fa-youtube"></i>
						</a>
          </div>
        </div>
        <div id='contact-form'>
          <h1 className='unselectable'>{this.props.siteData.siteStructure.contactFormTitle}</h1>
          <form onSubmit={this.submitForm} action="https://formspree.io/mdowbkwd" method="POST">
            <label>
            <p className='unselectable'>Name:<abbr title='required' className='red'>* </abbr></p>
              <input type='text' id='form-name' name='form-name' tabIndex={1} />
            </label>
            <label>
              <p className='unselectable'>E-mail:<abbr title='required' className='red'>* </abbr></p>
              <input type='email' id='form-email' name='form-email' tabIndex={2} />
            </label>
            <label>
              <p className='unselectable'>Message:<abbr title='required' className='red'>* </abbr></p>
              <textarea id='form-message' name='form-message' tabIndex={3} />
            </label>
            {this.state.status === "SUCCESS" ? <p className='dark'><strong>Thanks!</strong></p> : <input type='submit' id='form-submit' name='form-submit' value={this.props.siteData.siteStructure.contactFormSubmitText} tabIndex={4} />}
            {this.state.status === "ERROR" && <p className='red'><strong>Ooops! There was an error.</strong></p>}
          </form>
        </div>
      </div>
    );
  }
}

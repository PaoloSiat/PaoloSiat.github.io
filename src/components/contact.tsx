import React, { Component } from 'react';


interface ContactProps {}
interface ContactState {
  status: string;
}

export default class Contact extends Component<ContactProps, ContactState> {
  constructor(props: ContactProps) {
    super(props);

    this.state = {
      status: ''
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event: any): void {
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

  render(): JSX.Element {
    return (
      <div id='contact'>
        <div id='contact-information'>
          <h1>CONTACT INFORMATION</h1>
          <p><strong>John Paolo Siat</strong><br />Multimedia Artist</p>
          <p>30 Highwoodlane, Burnside<br />
            Christchurch, New Zealand 8053<br />
            Phone: <span className='dark'>+64291269475</span><br />
            E-mail: <span className='dark'>paolosiat@gmail.com</span></p>
          <div id='social-media-icons'>
            <a href='https://instagram.com/billygreatestwarriorever' className='fa-layers fa-2x'rel='noopener noreferrer' target='_blank'>
							<i className='fab fa-instagram'></i>
						</a>
            <a href='https://www.youtube.com/channel/UCWuBcvSc01LjIofiTb97I2g' className='fa-layers fa-2x' rel='noopener noreferrer' target='_blank'>
							<i className="fab fa-youtube"></i>
						</a>
          </div>
        </div>
        <div id='contact-form'>
          <h1 className='unselectable'>SEND ME A MESSAGE!</h1>
          <form onSubmit={this.submitForm} action="https://formspree.io/mknqvbjl" method="POST">
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
            {this.state.status === "SUCCESS" ? <p className='dark'><strong>Thanks!</strong></p> : <input type='submit' id='form-submit' name='form-submit' tabIndex={4} />}
            {this.state.status === "ERROR" && <p className='red'><strong>Ooops! There was an error.</strong></p>}
          </form>
        </div>
      </div>
    );
  }
}

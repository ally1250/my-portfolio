import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Fade } from 'react-reveal';
import { BeatLoader } from 'react-spinners';
import classnames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';
import { Header } from '../common';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import './index.scoped.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      success: false,
      error: '',
      loading: false,
    };
  }

  componentDidUpdate() {
    const { success, error } = this.state;
    if (success) {
      setTimeout(() => this.setState({ success: false }), 3000);
    } else if (error) {
      setTimeout(() => this.setState({ error: false }), 3000);
    }
  }

  renderTextField = (label, name, value) => (
    <label>
      <div className="label">{label}</div>
      <input type="text" name={name} value={value} onChange={this.onChange} className="text-input" />
    </label>
  )

  renderTextArea = (label, name, value) => (
    <label>
      <div className="label">{label}</div>
      <TextareaAutosize
        name={name}
        value={value}
        onChange={this.onChange}
        className="text-input"
        maxRows={3}
        style={{ width: '23vw', paddingBottom: 4 }}
      />
    </label>
  )

  onChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  onSend = (e) => {
    const { name, email, message } = this.state;

    e.preventDefault();

    const templateParams = {
      from_email: email,
      from_name: name,
      message_html: message,
    };

    this.setState({ loading: true });
    emailjs.send(
      'gmail',
      'template_dr5ry2jB',
      templateParams,
      'user_hq6uRZxiXMr0havajghXB',
    )
      .then((response) => {
        this.setState({ success: true, loading: false });
      }, (error) => {
        this.setState({ error, loading: false });
      });
    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  render() {
    const {
      name, email, message, success, error, loading,
    } = this.state;

    return (
      <div className="contact">
        <Header header="Let's Chat!" style={{ marginBottom: '1em' }} />
        <div className="input-fields-container">
          {this.renderTextField('Name', 'name', name)}
          {this.renderTextField('Email', 'email', email)}
          {this.renderTextArea('Message', 'message', message)}
        </div>
        <div
          className={classnames('submit-button', loading ? 'active' : '')}
          onClick={this.onSend}
        >
          {loading ? <BeatLoader color="white" /> : 'Send!'}
        </div>
        <div style={{ height: '9vh' }}>
          <Fade bottom collapse when={success || error}>
            <div
              className="feedback"
            >
              {success && 'Message sent!'}
              {error && 'Error'}
            </div>
          </Fade>
        </div>
        <div className="contact-footer">
          <LinkedinIcon className="contact-icon" />
          <a href="https://www.linkedin.com/in/danling-wang-b0bb1597" target="_blank" rel="noreferrer">LINKEDIN</a>
          <GithubIcon className="contact-icon" />
          <a href="https://github.com/ally1250" target="_blank" rel="noreferrer">GITHUB</a>
        </div>
      </div>
    );
  }
}

export default Contact;

import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import TextareaAutosize from 'react-textarea-autosize';
import { Header } from '../common';
import './index.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
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
        style={{ width: '28vw', paddingBottom: 4 }}
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
    emailjs.send(
      'gmail',
      'template_dr5ry2jB',
      templateParams,
      'user_hq6uRZxiXMr0havajghXB',
    );
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
    const { name, email, message } = this.state;

    return (
      <div className="contact">
        <Header header="Let's Chat!" />
        <div className="input-fields-container">
          {this.renderTextField('Name', 'name', name)}
          {this.renderTextField('Email', 'email', email)}
          {this.renderTextArea('Message', 'message', message)}
        </div>
        <input type="submit" value="Send!" onClick={this.onSend} className="submit-button" />
      </div>
    );
  }
}

export default Contact;

import React, { useState } from 'react';
import axios from 'axios';

import './Contact.css';
import ContactDetail from '../ContactDetail/ContactDetail';
import Alert from '../Alert/Alert';

const socialContacts = [
  {
    iconType: 'fab',
    iconName: 'twitter',
    url: 'https://twitter.com/SookunDharmesh',
  },
  {
    iconType: 'fab',
    iconName: 'facebook',
    url: 'https://www.facebook.com/DharmeshSookun',
  },
  {
    iconType: 'fab',
    iconName: 'instagram',
    url: 'https://www.instagram.com/dharmeshsookun/',
  },
  {
    iconType: 'fab',
    iconName: 'linkedin',
    url: 'https://www.linkedin.com/in/dharmesh-sookun-36ba58133/',
  },
];

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sendEmailBtnText, setSendEmailBtnText] = useState('Send Email');
  const [disabled, setDisabled] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [validationMessage, setValidationMessage] = useState(null);

  const clearForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const emailObj = { name, email, subject, message };
    const validationResult = validateInput(emailObj);
    if (validationResult) {
      setValidationMessage(validationResult);
      setShowAlert(true);
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setShowErrorAlert(false);
      }, 5000);
    } else {
      setValidationMessage(null);
      setDisabled(true);
      setSendEmailBtnText('Sending email...');
      axios
        .post(
          'https://personal-website-mail-server-production.up.railway.app/',
          emailObj
        )
        .then(({ data }) => {
          setShowAlert(true);
          if (data.sent) {
            setShowSuccessAlert(true);
            setDisabled(false);
            setSendEmailBtnText('Send Email');
            clearForm();
          } else {
            setShowErrorAlert(true);
            clearForm();
          }
          setTimeout(() => {
            setShowAlert(false);
            setShowSuccessAlert(false);
            setShowErrorAlert(false);
          }, 5000);
        })
        .catch((e) => {
          setShowErrorAlert(true);
          clearForm();
          setTimeout(() => {
            setShowAlert(false);
            setShowSuccessAlert(false);
            setShowErrorAlert(false);
          }, 5000);
        });
      setTimeout(() => {
        setShowAlert(true);
        setShowErrorAlert(true);
        setDisabled(false);
        setSendEmailBtnText('Send Email');
      }, 40000);
      setTimeout(() => {
        setShowAlert(false);
        setShowErrorAlert(false);
      }, 45000);
    }
  };

  const validateInput = (emailObj) => {
    if (
      !emailObj.name ||
      emailObj.name == '' ||
      !emailObj.email ||
      emailObj.email == '' ||
      !emailObj.subject ||
      emailObj.subject == '' ||
      !emailObj.message ||
      emailObj.message == ''
    ) {
      return 'Name, email, subject and message are required fields';
    }
    if (
      !emailObj.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      return 'Email address is not valid';
    }
  };

  return (
    <div>
      {showAlert ? (
        showSuccessAlert ? (
          <Alert type="success" message="Email sent" />
        ) : showErrorAlert ? (
          validationMessage ? (
            <Alert type="error" message={validationMessage} />
          ) : (
            <Alert type="error" message="Email not sent" />
          )
        ) : (
          <Alert type="error" message="Email not sent" />
        )
      ) : (
        ''
      )}
      <div className="contact">
        <div className="header">
          <h2>Contact</h2>
          <div className="green-border"></div>
        </div>
        <h1>Contact Me</h1>
        <div className="contact-details">
          <ContactDetail
            iconType="fas"
            iconName="fa-location-dot"
            ContactType="Address"
            ContactInfo="Delphinium Street Riviere du Poste, Mauritius"
          />
          <ContactDetail
            iconType="fas"
            iconName="fa-diagram-project"
            ContactType="Social Profiles"
            SocialContacts={socialContacts}
          />
          <ContactDetail
            iconType="fas"
            iconName="fa-envelope"
            ContactType="Email"
            ContactInfo="sookundharmesh2906@gmail.com"
          />
          <ContactDetail
            iconType="fas"
            iconName="fa-phone"
            ContactType="Call Me"
            ContactInfo="+230 58108134 / +230 55086689"
          />
        </div>
        <div className="contact-form">
          <form>
            <div className="form-grid">
              <input
                className="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <input
                className="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
              <input
                className="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
              />
              <textarea
                className="message"
                type="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
            <button
              id="submitBtn"
              className="submit"
              type="submit"
              onClick={sendEmail}
              disabled={disabled}
            >
              {sendEmailBtnText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

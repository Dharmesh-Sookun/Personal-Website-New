import React from 'react';

import './Contact.css';
import ContactDetail from '../ContactDetail/ContactDetail';

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
  return (
    <div>
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
                value=""
                onChange=""
                placeholder="Name"
              />
              <input
                className="email"
                type="email"
                value=""
                onChange=""
                placeholder="Your Email"
              />
              <input
                className="subject"
                type="text"
                value=""
                onChange=""
                placeholder="Subject"
              />
              <textarea
                className="message"
                type="textarea"
                value=""
                onChange=""
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
            <button className="submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

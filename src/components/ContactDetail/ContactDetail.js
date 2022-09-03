import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ContactDetail.css';

function ContactDetail({
  iconType,
  iconName,
  ContactType,
  ContactInfo,
  SocialContacts,
}) {
  return (
    <div className="contact-detail">
      <span>
        <FontAwesomeIcon icon={[iconType, iconName]} />
      </span>
      <div className="contact-info">
        <h3>{ContactType}</h3>
        {SocialContacts == null && ContactInfo != null ? (
          <p>{ContactInfo}</p>
        ) : (
          SocialContacts.map((socialContact, i) => {
            return (
              <a
                className="social-icon"
                key={i}
                href={socialContact.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={[socialContact.iconType, socialContact.iconName]}
                />
              </a>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ContactDetail;

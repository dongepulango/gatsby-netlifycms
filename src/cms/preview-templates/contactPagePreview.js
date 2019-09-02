import React from 'react';
//components
import { ContactPageTemplate } from '../../templates/contactPage';

const ContactPagePreview = ({ entry, widgetFor }) => {
  return(
    <ContactPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  );
};

export default ContactPagePreview;
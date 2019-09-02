import React from 'react';
//components
import { AboutPageTemplate } from '../../templates/aboutPage';

const AboutPagePreview = ({ entry, widgetFor }) => {
  return(
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  );
};

export default AboutPagePreview;
import React from 'react';
//components
import { HomePageTemplate } from '../../templates/indexPage';

const IndexPagePreview = ({ entry, getAsset }) => {

  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <HomePageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview;

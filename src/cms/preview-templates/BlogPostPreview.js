import React from 'react';
//components
import { BlogPostTemplate } from '../../templates/blogPost';

const BlogPostPreview = ({ entry, widgetFor }) => {
  return(
    <BlogPostTemplate
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
    />
  );
};

export default BlogPostPreview;
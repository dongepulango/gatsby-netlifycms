import CMS from 'netlify-cms-app';

import HomePagePreview from './preview-templates/homePagePreview';
import AboutPagePreview from './preview-templates/aboutPagePreview';
import BlogPostPreview from './preview-templates/blogPostPreview';

CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
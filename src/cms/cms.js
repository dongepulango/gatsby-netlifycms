import CMS from 'netlify-cms-app';

import HomePagePreview from './preview-templates/homePagePreview';
import BlogPostPreview from './preview-templates/blogPostPreview';
import AboutPagePreview from './preview-templates/aboutPagePreview';
import ContactPagePreview from './preview-templates/contactPagePreview';


CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
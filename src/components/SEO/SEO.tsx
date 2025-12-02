import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url, type }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      {type && <meta property="og:type" content={type} />}
    </Helmet>
  );
};

export default SEO;

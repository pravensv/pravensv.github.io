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
  const siteTitle = "Praveen Voruganti | Java Full Stack Developer & Release Automation Engineer";
  const defaultDescription = "Portfolio of Praveen Voruganti, a Java Full Stack Developer and Release Automation Engineer building scalable enterprise applications with Spring Boot, React.js, AWS, microservices, and CI/CD automation.";
  const defaultImage = "https://pravensv.github.io/praveen.png";
  const siteUrl = "https://pravensv.github.io/";

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title ? `${title} | Praveen Voruganti` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || "Praveen Voruganti, Java Full Stack Developer, Release Automation Engineer, Spring Boot, React.js, AWS, Microservices, CI/CD, DevOps, Docker, Kubernetes, enterprise portfolio"} />
      <meta name="theme-color" content="#0a0a0a" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content="Praveen Voruganti Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@pravensv" /> {/* Replace with actual handle if different */}
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;

import { useEffect } from 'react';

const SEOManager = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  schemaData = null,
}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const updateMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('name', 'description', description);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:type', ogType);

    if (canonicalUrl) {
      let linkTag = document.querySelector('link[rel="canonical"]');
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'canonical');
        document.head.appendChild(linkTag);
      }
      linkTag.setAttribute('href', canonicalUrl);
    }

    let scriptTag = document.getElementById('seo-json-ld');
    if (schemaData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'seo-json-ld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaData);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      const activeScript = document.getElementById('seo-json-ld');
      if (activeScript) {
        activeScript.remove();
      }
    };
  }, [title, description, canonicalUrl, ogType, schemaData]);

  return null;
};

export default SEOManager;

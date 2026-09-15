import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

/**
 * Renders one route to static HTML plus the head tags Helmet collected for it.
 * Called once per URL by prerender.js at build time.
 */
export function render(url) {
  const helmetContext = {};

  const html = renderToString(
    <StrictMode>
      <App location={url} helmetContext={helmetContext} />
    </StrictMode>
  );

  const { helmet } = helmetContext;

  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join('\n    ')
    : '';

  const htmlAttributes = helmet ? helmet.htmlAttributes.toString() : '';

  return { html, head, htmlAttributes };
}

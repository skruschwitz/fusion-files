const schemaName = 'article';

const params = {
  website_url : 'text',
  published: 'text',
};

const resolve = (key) => {
  const requestUri = `/content/v4/stories/?website_url=${ key.website_url || key }&website=adn`;

  return (key.hasOwnProperty('published')) ? `${requestUri}&published=${key.published}` : requestUri;
}

export default {
  resolve,
  params,
  schemaName,
}

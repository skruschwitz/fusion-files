import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import { useAppContext } from 'fusion:context';

const Header = () => {
  /* retrieve global content from fusion's app context */
  const appContext = useAppContext();
  const { globalContent } = appContext;

  return (
    <header className="container-fluid">
      <span className="text-info">News from Demo!</span>
      <h2 className="card-title">{globalContent.headlines && globalContent.headlines.basic}</h2>
      <h5 className="card-text">{globalContent.subheadlines && globalContent.subheadlines.basic}</h5>
    </header>
  );
}

export default Header;

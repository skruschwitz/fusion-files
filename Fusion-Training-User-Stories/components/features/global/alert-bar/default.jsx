import React from 'react';
import PropTypes from 'prop-types';
import { useComponentContext } from 'fusion:context';

const MyAlert = (props) => {

  /* retrieve custom fields from fusion's component context */
  const componentContext = useComponentContext();
  const { text } = componentContext.customFields;
  const { hexCode } = componentContext.customFields;

  const styles = {
    margin: '10px',
    padding: '10px',
    fontWeight: '800',
    Color: '#ffffff',
    backgroundColor: `#${hexCode}`,
  };

  return (
      <div style={styles}>{text}</div>
  )
}

MyAlert.propTypes = {
  customFields: PropTypes.shape({
    text: PropTypes.string.tag({
      name: 'Main Alert Text'
    }).isRequired,
    hexCode: PropTypes.string.tag({
      label: 'Hex Code',
      description: 'Please enter a valid color hex value. For example, 6b5d96.'
    }),
  }),
};

export default MyAlert

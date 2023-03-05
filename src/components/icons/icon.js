import React from 'react';
import PropTypes from 'prop-types';
import {
  IconGitHub,
  IconLinkedin,
  IconExternal,
  IconFolder,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    // case 'External':
    //   return <IconExternal />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Folder':
      return <IconFolder />;
    case 'Linkedin':
      return <IconLinkedin />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Checkbox, Radio, Stacked, Select, File } from './CustomControlStack';
import { mapToCssModules } from './utils';

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  type: 'stacked',
};

const tagTypeMap = {
  checkbox: Checkbox,
  radio: Radio,
  select: Select,
  stacked: Stacked,
  file: File,
};

class CustomControl extends React.Component {
  render() {
    const {
      className,
      cssModule,
      type,
      ...attributes
    } = this.props;

    let Tag = tagTypeMap[type];

    let customControlClass = 'custom';

    if (['radio', 'checkbox'].indexOf(type) > -1) {
      customControlClass = `${customControlClass}-control custom-${type}`;
    } else if (type === 'radio-stacked') {
      customControlClass = `${customControlClass}-controls-${type}`;
    } else {
      customControlClass = `${customControlClass}-${type}`;
    }

    const classes = mapToCssModules(classNames(
      className,
      customControlClass
    ), cssModule);

    return (<Tag {...attributes} className={classes} />);
  }
}

CustomControl.propTypes = propTypes;
CustomControl.defaultProps = defaultProps;

export default CustomControl;

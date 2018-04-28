/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RadioOrCheckbox = props => {
  const {
    className,
    description,
    getRef,
    inputType,
    ...attributes
  } = props;

  return (
    <label className={className}>
      <input {...attributes} type={inputType} className="custom-control-input" ref={getRef} />
      <span className="custom-control-indicator"></span>
      {description && (<span className="custom-control-description">{description}</span>)}
    </label>
  );
};

RadioOrCheckbox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  inputType: PropTypes.string
};

export const Checkbox = props => {
  return (
    <RadioOrCheckbox inputType="checkbox" {...props} />
  );
};

export const Radio = props => {
  return (
    <RadioOrCheckbox inputType="radio" {...props} />
  );
};

export const Stacked = (props) => {
  const {
    className,
    ...attributes
  } = props;

  return (
    <div className="custom-controls-stacked" {...attributes} />
  );
};

Stacked.propTypes = {
  className: PropTypes.string
};

Stacked.defaultProps = {};

export const Select = (props) => {
  const {
    getRef,
    ...attributes
  } = props;

  return (
    <select {...attributes} ref={getRef} />
  );
};

Select.propTypes = {
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export const File = (props) => {
  const {
    className,
    getRef,
    lang,
    ...attributes
  } = props;

  return (
    <label className={className}>
      <input {...attributes} type="file" className="custom-file-input" />
      <span className="custom-file-control" lang={lang} />
    </label>
  );
};

File.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  lang: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

File.defaultProps = {
  lang: 'en'
};

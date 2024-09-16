import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Keep the styles file

export const Button = ({ primary, size, label, noBorder, children, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  const buttonSize = size === 'small' ? 'button--small' : size === 'large' ? 'button--large' : 'button--medium';
  const borderClass = noBorder ? 'button--no-border' : '';

  return (
    <button
      type="button"
      className={`button ${mode} ${buttonSize} ${borderClass}`}
      style={{
        '--button-padding': props.padding || null,
        '--button-border-radius': props.borderRadius || null,
        '--button-font-family': props.fontFamily || null,
        '--button-font-size': props.fontSize || null,
        '--button-box-shadow': props.boxShadow || null,
        '--button-primary-bg-color': props.primaryBgColor || null,
        '--button-primary-text-color': props.primaryTextColor || null,
        '--button-primary-border-color': props.primaryBorderColor || null,
        '--button-primary-hover-bg-color': props.primaryHoverBgColor || null,
        '--button-primary-hover-box-shadow': props.primaryHoverBoxShadow || null,
        '--button-secondary-bg-color': props.secondaryBgColor || null,
        '--button-secondary-text-color': props.secondaryTextColor || null,
        '--button-secondary-border-color': props.secondaryBorderColor || null,
        '--button-secondary-hover-bg-color': props.secondaryHoverBgColor || null,
        '--button-secondary-hover-box-shadow': props.secondaryHoverBoxShadow || null,
        '--button-small-font-size': props.smallFontSize || null,
        '--button-small-padding': props.smallPadding || null,
        '--button-medium-font-size': props.mediumFontSize || null,
        '--button-medium-padding': props.mediumPadding || null,
        '--button-large-font-size': props.largeFontSize || null,
        '--button-large-padding': props.largePadding || null,
        '--button-no-border-bg-color': props.noBorderBgColor || null,
        '--button-no-border-text-color': props.noBorderTextColor || null,
        '--button-no-border-border': props.noBorderBorder || null,
        '--button-no-border-border-bottom': props.noBorderBorderBottom || null,
        '--button-no-border-border-radius': props.noBorderBorderRadius || null,
        '--button-no-border-padding': props.noBorderPadding || null,
        '--button-no-border-hover-border-bottom': props.noBorderHoverBorderBottom || null,
        '--button-no-border-hover-bg-color': props.noBorderHoverBgColor || null,
        '--button-no-border-hover-box-shadow': props.noBorderHoverBoxShadow || null,
      }}
      {...props}
    >
      {children || label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  noBorder: PropTypes.bool,
  children: PropTypes.node,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  boxShadow: PropTypes.string,
  primaryBgColor: PropTypes.string,
  primaryTextColor: PropTypes.string,
  primaryBorderColor: PropTypes.string,
  primaryHoverBgColor: PropTypes.string,
  primaryHoverBoxShadow: PropTypes.string,
  secondaryBgColor: PropTypes.string,
  secondaryTextColor: PropTypes.string,
  secondaryBorderColor: PropTypes.string,
  secondaryHoverBgColor: PropTypes.string,
  secondaryHoverBoxShadow: PropTypes.string,
  smallFontSize: PropTypes.string,
  smallPadding: PropTypes.string,
  mediumFontSize: PropTypes.string,
  mediumPadding: PropTypes.string,
  largeFontSize: PropTypes.string,
  largePadding: PropTypes.string,
  noBorderBgColor: PropTypes.string,
  noBorderTextColor: PropTypes.string,
  noBorderBorder: PropTypes.string,
  noBorderBorderBottom: PropTypes.string,
  noBorderBorderRadius: PropTypes.string,
  noBorderPadding: PropTypes.string,
  noBorderHoverBorderBottom: PropTypes.string,
  noBorderHoverBgColor: PropTypes.string,
  noBorderHoverBoxShadow: PropTypes.string,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  label: '',
  noBorder: false,
};

export default Button;
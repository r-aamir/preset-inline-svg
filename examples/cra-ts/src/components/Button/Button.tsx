/* eslint-disable react/prop-types, react/button-has-type */
import React, { FC } from 'react';
import logo, { ReactComponent as LogoSvg } from '../../assets/logo.svg';

interface ButtonProps {
  /**
   * Sets the button size.
   */
  variant?: 'small' | 'large';
  /**
   * Disables the button.
   */
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, disabled, variant = 'small' }) => (
  <button disabled={disabled}>
    <img src={logo} alt='Logo' />
    <LogoSvg />
    {children} {variant}
  </button>
);

// eslint-disable-next-line import/no-default-export
export default Button;

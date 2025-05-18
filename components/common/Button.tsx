import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
  >
    {label}
  </button>
);

export default Button;

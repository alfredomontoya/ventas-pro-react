import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: ButtonVariant;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  variant = 'primary',
}) => {
  // Clase basada en el variant, que debe existir en globals.css
  const variantClass = `btn-${variant}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

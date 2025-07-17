import React from 'react';

type ButtonWarningProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const ButtonWarning: React.FC<ButtonWarningProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
          px-4 py-2 bg-yellow-100 text-yellow-800 font-semibold border border-yellow-400
          rounded shadow-sm hover:bg-yellow-200 focus:outline-none focus:ring-2
          focus:ring-yellow-400 focus:ring-opacity-50 transition duration-200
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default ButtonWarning;

import React from 'react';

type ButtonSecondaryProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
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
        px-4 py-2 bg-gray-100 text-gray-800 font-semibold border border-gray-300
        rounded shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2
      focus:ring-gray-400 focus:ring-opacity-50 transition duration-200
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;

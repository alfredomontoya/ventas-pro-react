// src/components/ui/Input.tsx
import React from 'react';

interface InputProps {
  label?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  hasError?: boolean;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', value, onChange, placeholder, name, hasError=false, errorMessage }) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-semibold">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={`w-full border border-gray-300 rounded px-3 py-2 
        ${hasError ? 'border-red-500' : 'border-gray-300'}
        focus:outline-none focus:ring focus:border-blue-500`}     
      />
      {hasError && errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;

import React from 'react';

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ value, handleChange }: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <input
      type='text'
      className='border-2 border-gray-900 rounded-md px-2 py-1'
      value={value}
      onChange={handleChange}
    />
    // <input
    //   type='text'
    //   className='border-2 border-gray-900 rounded-md px-2 py-1'
    //   value={props.value}
    //   onChange={handleChange}
    // />
  );
}

export default Input;

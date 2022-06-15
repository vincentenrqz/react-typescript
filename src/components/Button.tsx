import React from 'react';

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function Button(props: ButtonProps) {
  return (
    <button
      className='px-5 rounded-md py-2 bg-green-500 hover:bg-green-600 transition duration-300'
      onClick={event => props.handleClick(event, 1)}
    >
      <span className='font-semibold text-white'>Click me</span>
    </button>
  );
}

export default Button;

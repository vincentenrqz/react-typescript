import { useReducer } from 'react';

type CounterState = {
  count: number;
};

type CounterAction = {
  type: 'increment' | 'decrement' | 'reset'; // useReducer Strict Action Types
  payload: number;
};

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className='text-center'>
        Count:{' '}
        <span className='text-green-500 font-semibold'>{state.count}</span>
      </div>
      <div className='flex justify-center space-x-3 mt-6'>
        <button
          onClick={() => dispatch({ type: 'increment', payload: 1 })} // useReducer Strict Action Types
          className='p-2 rounded-md bg-green-500 hover:bg-green-600 transition duration-300 font-semibold text-white'
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement', payload: 1 })}
          className='p-2 rounded-md bg-red-500 hover:bg-red-600 transition duration-300 font-semibold text-white'
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default Counter;

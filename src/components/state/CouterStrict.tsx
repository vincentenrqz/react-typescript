import { useReducer } from 'react';

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
};

type ResetAction = {
  type: 'reset';
};

// type CounterAction = {
//   type: 'increment' | 'decrement' | 'reset'; // useReducer Strict Action Types
//   payload?: number;
// };
type CounterAction = UpdateAction | ResetAction;

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

function CounterStrict() {
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
          className='px-2 rounded-md py-2 bg-green-500 hover:bg-green-600 transition duration-300 font-semibold text-white'
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement', payload: 1 })}
          className='px-2 rounded-md py-2 bg-red-500 hover:bg-red-600 transition duration-300 font-semibold text-white'
        >
          Decrement
        </button>
      </div>
      <div className='flex justify-center mt-2'>
        <button
          onClick={() => dispatch({ type: 'reset' })}
          className='px-2 rounded-md py-2 bg-blue-500 hover:bg-blue-600 transition duration-300 font-semibold text-white'
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default CounterStrict;

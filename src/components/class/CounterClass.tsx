import { Component } from 'react';

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

class CounterClass extends Component<CounterProps, CounterState> {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className='p-2 rounded-md bg-green-500 hover:bg-green-600 transition duration-300 font-semibold text-white'
        >
          Increment
        </button>
        <div className='mt-5'>
          {this.props.message} {this.state.count}
        </div>
      </div>
    );
  }
}

export default CounterClass;

// Use function components unless you have a usecase for class components

// import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import Login from './components/state/Login';
import User from './components/state/User';
import UserAssertion from './components/state/UserAssertion';
import Counter from './components/state/Counter';
import CounterStrict from './components/state/CouterStrict';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import UserC from './components/context/UserC';
import MutableRef from './components/ref/MutableRef';
import DomRef from './components/ref/DomRef';
import CounterClass from './components/class/CounterClass';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import { List } from './components/generics/List';

function App() {
  const personName = {
    fname: 'Shanine',
    lname: 'Plaza'
  };

  let nameList = [
    {
      fname: 'Daniel Dane',
      lname: 'Acero'
    },
    {
      fname: 'Daniel',
      lname: 'Momo'
    },
    {
      fname: 'Paolo',
      lname: 'Palacio'
    },
    {
      fname: 'Jonas',
      lname: 'Paquibot'
    },
    {
      fname: 'Nestor',
      lname: 'Palpallatoc'
    },
    {
      fname: 'Ken Ray',
      lname: 'Dignos'
    },
    {
      fname: 'Bryle',
      lname: 'Baguio'
    },
    {
      fname: 'Brent',
      lname: 'Victorillo'
    }
  ];

  return (
    <div className='App'>
      <div className='flex justify-center my-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>Typing Props</h2>
            </div>
            <div className='flex justify-center items-center w-64 bg-gray-100 shadow-md rounded-md h-40 px-2'>
              {/* Boolean/Numbers/String */}
              <Greet
                fname='Vincent'
                mname='Capangpangan'
                lname='Enriquez'
                isLoggedIn={true}
              />
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>Basic Props</h2>
            </div>
            <div className='flex justify-center items-center w-64 bg-gray-100 shadow-md rounded-md h-40'>
              {/* Objects */}
              <Person name={personName} />
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>
                Basic Props & Typing Props
              </h2>
            </div>
            <div className='flex items-center justify-center w-64 bg-gray-100 shadow-md rounded-md h-40'>
              {/* Arrays */}
              <div className='overflow-scroll h-40 w-full'>
                <PersonList names={nameList} />
              </div>
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>Advanced Props</h2>
            </div>
            <div className='flex items-center justify-center w-64 bg-gray-100 shadow-md rounded-md h-40'>
              {/* Union of string literals */}
              <Status status='error' />
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <div className='flex items-center'>
                <h2 className='font-bold text-white mr-4'>Advanced Props</h2>
                <span className='text-xs text-white'>Intrisctic Atribute</span>
              </div>
            </div>
            <div className='flex items-center justify-center w-64 bg-gray-100 shadow-md rounded-md h-40'>
              {/* Children props */}
              <Heading>Placeholder Text</Heading>
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>Advanced Props</h2>
            </div>
            <div className='flex items-center justify-center w-64 bg-gray-100 shadow-md rounded-md h-40'>
              {/* Child to another component */}
              <Oscar>
                <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
              </Oscar>
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>Advanced Props</h2>
            </div>
            <div className='flex items-center justify-center w-64 bg-gray-100 shadow-md rounded-md h-40 px-2'>
              {/* Optional Props */}
              <Greet fname='Julius' lname='Paglinawan' isLoggedIn={true} />
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>Button Event Props</h2>
            </div>
            <div className='flex items-center justify-center w-64 bg-gray-100 shadow-md rounded-md h-40 px-2'>
              {/* Button Props */}
              <Button
                handleClick={(event, id) => {
                  console.log('button clicked', event, id);
                }}
              />
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>Input Event Props</h2>
            </div>
            <div className='flex items-center justify-center w-64 bg-gray-100 shadow-md rounded-md h-40 px-2'>
              {/* Input Props */}
              <Input value='' handleChange={event => console.log(event)} />
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>Style Props</h2>
            </div>
            <div className='flex items-center justify-center w-64 bg-gray-100 shadow-md rounded-md h-40 px-2'>
              {/* Style Props */}
              <Container
                styles={{ border: '1px solid black', padding: '1rem' }}
              />
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>UseState Hook</h2>
            </div>
            <div className='flex items-center justify-center w-64 bg-gray-100 shadow-md rounded-md h-40 px-2'>
              {/* UseState Hook */}
              <Login />
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>UseState Future Value</h2>
            </div>
            <div className='flex items-center justify-center w-64 bg-gray-100 shadow-md rounded-md h-40 px-2'>
              {/* UseState Future Value */}
              <User />
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>UseState Type Assertion</h2>
            </div>
            <div className='flex items-center justify-center w-64 bg-gray-100 shadow-md rounded-md h-40 px-2'>
              {/* UseState Type Assertion */}
              <UserAssertion />
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>UseReducer Hook</h2>
            </div>
            <div className='w-64 bg-gray-100 shadow-md rounded-md h-40 px-3 py-3'>
              {/* UseReducer Hook */}
              <Counter />
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>
                UseReducer Hook Counter Strict
              </h2>
            </div>
            <div className='w-64 bg-gray-100 shadow-md rounded-md h-40 px-3 py-3'>
              {/* UseReducer Hook Counter Strict */}
              <CounterStrict />
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>UseContext Hook</h2>
            </div>
            <div className='w-64 bg-gray-100 shadow-md rounded-md h-40 px-3 py-3'>
              {/* UseContext Hook */}
              <ThemeContextProvider>
                <Box></Box>
              </ThemeContextProvider>
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>UseContext Future Value</h2>
            </div>
            <div className='w-64 bg-gray-100 shadow-md rounded-md h-40 px-3 py-3'>
              {/* UseContext Future Value */}
              <UserContextProvider>
                <UserC />
              </UserContextProvider>
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>UseRef Hook</h2>
            </div>
            <div className='w-64 bg-gray-100 shadow-md rounded-md h-40 px-3 py-3'>
              {/* UseRef Hook */}
              <MutableRef></MutableRef>
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>UseRef Hook</h2>
            </div>
            <div className='w-64 bg-gray-100 shadow-md rounded-md h-40 px-3 py-3'>
              {/* UseRef Hook */}
              <DomRef></DomRef>
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>Class Component</h2>
            </div>
            <div className='w-64 bg-gray-100 shadow-md rounded-md h-40 px-3 py-3'>
              {/* Class Component */}
              <CounterClass message='The count value is'></CounterClass>
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>Class Component Props</h2>
            </div>
            <div className='w-64 bg-gray-100 shadow-md rounded-md h-40 px-3 py-3'>
              {/* Class Component Props */}
              <Private isLoggedIn={false} component={Profile}></Private>
            </div>
          </div>
          <div>
            <div className='flex justify-start'>
              <h2 className='font-bold text-white'>Generic Props</h2>
            </div>
            <div className='w-full flex gap-4 bg-gray-100 shadow-md rounded-md h-40 px-3 py-3'>
              {/* Generic Props */}
              {/* <List
            items={['Thor', 'Hulk', 'Ironman']}
            onClick={item => console.log(item)}
          ></List>
          <List items={[1, 2, 3]} onClick={item => console.log(item)}></List> */}
              <List
                items={[
                  {
                    id: 1,
                    first: 'Vincent',
                    last: 'Enriquez'
                  },
                  {
                    id: 2,
                    first: 'Shanine',
                    last: 'Plaza'
                  },
                  {
                    id: 3,
                    first: 'Lykka',
                    last: 'Plaza'
                  }
                ]}
                onClick={item => console.log(item)}
              ></List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

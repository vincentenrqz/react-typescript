import { useState } from 'react';

// type LoginProps = {
//   handleLogin: () => void;
//   handleLogout: () => void;
// };

function Login() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleLogin = () => {
    setisLoggedIn(true);
  };

  const handleLogout = () => {
    setisLoggedIn(false);
  };

  return (
    <div>
      <div className='space-x-4'>
        <button
          className='bg-green-500 px-3 py-1 rounded text-white font-semibold hover:bg-green-600 transition duration-300'
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className='bg-red-500 px-3 py-1 rounded text-white font-semibold hover:bg-red-600 transition duration-300'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className='text-center mt-4'>
        User is{' '}
        {isLoggedIn ? (
          <div className='font-bold text-green-500'>Logged in</div>
        ) : (
          <div className='font-bold text-red-500'>Logged out</div>
        )}
      </div>
    </div>
  );
}

export default Login;

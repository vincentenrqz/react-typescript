import { useContext } from 'react';
import { UserContext } from './UserContext';

function User() {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    // if (userContext) {
    userContext.setUser({
      name: 'Vincent',
      email: 'vre43@gmail.com'
    });
    // }
  };
  const handleLogout = () => {
    // if (userContext) {
    userContext.setUser(null);
    // }
  };
  return (
    <div>
      <div className='flex justify-center gap-4'>
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
      <div className='flex flex-col mt-4'>
        <div className=''>Name: {userContext.user?.name}</div>
        <div className=''>Email: {userContext.user?.email}</div>
      </div>
    </div>
  );
}

export default User;

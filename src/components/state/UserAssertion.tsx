import { useState } from 'react';

type AuthUser = {
  name?: string;
  email?: string;
};

function UserAssertion(props: AuthUser) {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: 'Vincent',
      email: 'vre43@gmail.com'
    });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };
  return (
    <div>
      <div className='space-x-4'>
        <button
          className='bg-green-500 px-3 py-1 rounded text-white font-semibold hover:bg-green-600 transition duration-300'
          onClick={handleLogin}
        >
          Login
        </button>
        {/* <button
          className='bg-red-500 px-3 py-1 rounded text-white font-semibold hover:bg-red-600 transition duration-300'
          onClick={handleLogout}
        >
          Logout
        </button> */}
      </div>
      <div className='flex flex-col mt-4'>
        <div className=''>Name: {user.name}</div>
        <div className=''>Email: {user.email}</div>
      </div>
    </div>
  );
}

export default UserAssertion;

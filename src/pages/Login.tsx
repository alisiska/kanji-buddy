import { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('1234');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('loggedIn', 'true');
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-center h-dvh'>
      <div className='flex flex-col gap-2 w-full md:w-2/3 p-10 h-dvh'>
        <h1 className='text-base/7 font-semibold text-gray-900 flex gap-2 items-center justify-start'>
          <img src='/favicon.ico' alt='Logo illustration' className='w-11' />
          Kanji Buddy
        </h1>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-2 items-center justify-start m-10 mt-[30%] w-[90%] border-solid border-2 border-teal-600 p-6 rounded-lg shadow-lg'
        >
          <h2 className='text-base/7 font-semibold text-gray-900 '>
            Welcome to Kanji Buddy, your helper to learn japanese
          </h2>
          <p className='text-base/7 font-semibold text-gray-900 '>Sign up</p>
          <div className='w-2/3'>
            <label className='block text-sm/6 font-medium text-gray-900'>
              Username
            </label>
            <div className='mt-2'>
              <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-teal-600'>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id='username'
                  type='text'
                  name='username'
                  placeholder='janesmith'
                  className='block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
                />
              </div>
            </div>
          </div>

          <div className='w-2/3'>
            <label className='block text-sm/6 font-medium text-gray-900'>
              Password
            </label>
            <div className='mt-2'>
              <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-teal-600'>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id='password'
                  name='password'
                  placeholder='Password'
                  className='block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
                />
              </div>
            </div>
          </div>
          <button
            className=' ml-auto mr-[17%] mt-[10px] h-[32px] w-full md:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-teal-700 active:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition'
            type='submit'
          >
            Login
          </button>
        </form>
      </div>

      <div className='flex flex-col gap-2 w-full md:w-1/2 h-dvh'>
        <img
          src='/assets/logo-ill.jpg'
          alt='Login Illustration'
          className='w-full h-dvh'
        />
      </div>
    </div>
  );
}

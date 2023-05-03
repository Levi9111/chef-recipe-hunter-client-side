import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    // Your registration logic goes here
  };

  return (
    <div className="flex flex-col items-center mt-8 bg-gray-100 p-8 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="my-2 w-full">
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="border-gray-300 border-2 rounded-md p-2 w-full h-10"
          />
        </div>
        <div className="my-2 w-full">
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border-gray-300 border-2 rounded-md p-2 w-full h-10"
          />
        </div>
        <div className="my-2 w-full">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border-gray-300 border-2 rounded-md p-2 w-full h-10"
          />
        </div>
        <div className="my-2 w-full">
          <label htmlFor="photoUrl" className="text-lg">
            Photo URL
          </label>
          <input
            type="text"
            id="photoUrl"
            value={photoUrl}
            onChange={e => setPhotoUrl(e.target.value)}
            className="border-gray-300 border-2 rounded-md p-2 w-full h-10"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 mt-4"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-500">
          Login here
        </Link>
      </p>
      <div className="flex mt-4">
        <button className="bg-red-500 text-white rounded-md py-2 px-4 mr-4">
          <FaGoogle className="inline-block mr-2" />
          Sign in with Google
        </button>
        <button className="bg-gray-800 text-white rounded-md py-2 px-4">
          <FaGithub className="inline-block mr-2" />
          Sign in with Github
        </button>
      </div>
    </div>
  );
}

export default Register;

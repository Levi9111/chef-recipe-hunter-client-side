import { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';

function Login() {
  const { logIn, googleLogIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: implement login functionality
    logIn(email, password)
      .then(res => {
        const { user } = res;
        console.log(user);
        // navigation(from, { replace: true });
        setEmail('');
        setPassword('');
      })
      .catch(err => console.log(err));
  };

  const googleSubmit = e => {
    googleLogIn()
      .then(res => {
        const { user } = res;
        console.log(user);
      })
      .catch(err => console.log(err));
  };

  const githubSubmit = e => {};

  return (
    <div className="max-w-md mx-auto mt-4 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <p className="text-gray-700">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:text-blue-700">
              Register here
            </a>
          </p>
        </div>
      </form>
      <div className="mt-4 flex justify-center items-center">
        <button
          onClick={googleSubmit}
          className="bg-red-600 text-white p-2 rounded-full mr-4"
        >
          <FaGoogle size={24} />
        </button>
        <button className="bg-gray-800 text-white p-2 rounded-full">
          <FaGithub size={24} />
        </button>
      </div>
    </div>
  );
}

export default Login;

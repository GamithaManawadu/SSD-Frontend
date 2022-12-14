import React, { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
    role: '',
  });
  const [error, setError] = useState('');
  const [buttonStatus, setButtonStatus] = useState(false);
  const role = ['worker', 'manager'];
  const token = localStorage.getItem('token');

  const registerUser = async (e) => {
    e.preventDefault();
    setButtonStatus(true);
    setError('');

    try {
      await axios.post('user/register', user, {
        headers: {
          token: token,
        },
      });
      toast.success('Successfully Registered User!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      setButtonStatus(false);
      setUser({ name: '', email: '', username: '', role: '' });
    } catch (err) {
      setError(err.response.data.message);
      setButtonStatus(false);
    }
  };

  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font h-[calc(100vh-80px)] flex items-center">
        <div className="container  px-5 mx-auto flex flex-wrap items-center justify-center xl:w-2/5 lg:w-1/2 md:w-3/4 w-full">
          <div className="border-blue-500 border-2  rounded-xl p-16 flex flex-col ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-2xl font-medium title-font mb-5 text-center">Add New Workers and Managers</h2>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="username" className="leading-7 text-sm text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>

            <div className="relative mb-8 mt-8">
              <div className="flex justify-left">
                <div className="flex">
                  <div className="form-check mr-8">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value={role[0]}
                      onChange={(e) => setUser({ ...user, role: e.target.value })}
                    />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
                      Worker
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value={role[1]}
                      onChange={(e) => setUser({ ...user, role: e.target.value })}
                    />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault2">
                      Manager
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="text-white bg-yellow-500 border-0 py-2 px-8 my-2 focus:outline-none hover:bg-blue-600 rounded text-lg"
              onClick={registerUser}
              disabled={buttonStatus}
            >
              {buttonStatus ? 'Registering...' : 'Register'}
            </button>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </section>
    </div>
  );
};

export default Register;

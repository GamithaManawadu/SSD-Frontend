import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './design.css';
import { manager, admin, worker } from '../util/menu';
import Logo from './../assets/bubble-chat.png';

const Header = () => {
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('token');
  let menu = [];
  const navigate = useNavigate();

  if (role === 'admin') {
    menu = admin;
  } else if (role === 'manager') {
    menu = manager;
  } else if (role === 'worker') {
    menu = worker;
  }

  return (
    <header className="head">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
        <img class="object-cover object-center rounded transform -scale-x-10" alt="hero" src={Logo} />
          <span className="ml-3 text-xl">SSD Message</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {menu.map((item) => (
            <Link to={item.link} key={item.title} className="mr-5 hover:text-gray-900">
              {item.title}
            </Link>
          ))}
        </nav>
        {token ? (
          <button
            onClick={() => {
              localStorage.clear();
              navigate('/');
            }}
            className="inline-flex items-center bg-yellow-500 border-0 py-2 px-4 focus:outline-none text-white hover:bg-blue-600 rounded text-base mt-4 md:mt-0"
          >
            Logout
            
          </button>
        ) : (
          <Link to="/login">
            <button className="inline-flex items-center bg-indigo-500 border-0 py-2 px-4 focus:outline-none text-white hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">
              Login
             
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

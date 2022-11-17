import React from 'react';
import { Link } from 'react-router-dom';
import '../components/design.css';
import Header from '../components/Header';
import CTAImage from './../assets/cta-img.png';

const Home = () => {
  const token = localStorage.getItem('token');

  return (
    <div>
      <Header />
      <section class="text-gray-600 body-font h-[calc(100vh-80px)] flex items-center">
        <div class="container mx-auto flex px-10 py-16 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-center mb-10 md:mb-0 items-center text-center">
            <h1 class="sm:text-5xl text-3xl mb-4 font-bold text-blue-900 max-w-[750px]">
              File and Message Management System
            </h1>
            <p class="mb-8 leading-relaxed">
              
            </p>
            <div class="flex justify-center">
              {!token && (
                <Link to="/login">
                  <button className="inline-flex items-center bg-indigo-500 border-0 py-2 px-4 focus:outline-none text-white hover:bg-indigo-600 rounded text-base md:mt-0">
                    Login
                    
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div class="image lg:max-w-lg lg:w-full">
            <img class="object-cover object-center rounded transform -scale-x-100" alt="hero" src={CTAImage} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

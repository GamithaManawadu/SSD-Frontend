import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
const WorkerMessage = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [buttonStatus, setButtonStatus] = useState(false);
  const token = localStorage.getItem('token');
  //const token = JSON.parse(localStorage.getItem('token'));

  const saveMessage = async (e) => {
    e.preventDefault();
    setButtonStatus(true);
    try {
      await axios.post('/message/worker', {message}, {
        headers: {
          token: token,
        },
      });toast.success("Successfully Saved Message!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setButtonStatus(false);
      setMessage("");
    } catch (err) {
      setError(err.response.data.message);
      setButtonStatus(false);
    }
  };
  return (
    <div>
      <Header />
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[850px] max-h-[500px]">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <form>
            <div class="mb-5">
              <label for="message" class="mb-3 block text-base font-medium text-[#07074D]">
                Message
              </label>
              <textarea
                rows="4"
                type="text"
                id="message"
                name="message"
                value={message}
                placeholder="Enter your message here"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 
                text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button
                class="hover:shadow-form rounded-md bg-[blue] py-3 px-8 text-base font-semibold text-white outline-none"
                onClick={saveMessage}
                disabled={buttonStatus}
              >
                {buttonStatus ? 'Saving...' : 'Save'}
              </button>
            </div>
          </form>
        </div>
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
  );
};

export default WorkerMessage;

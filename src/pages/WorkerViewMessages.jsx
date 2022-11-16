import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../components/Header';

const ViewWorkerMessages = () => {
  const [messages, setMessagers] = useState([]);

  useEffect(() => {
    getAllMessages();
  }, []);

  const getAllMessages = async () => {
    try {
      const response = await axios.get('/message', {
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      setMessagers(response.data.messages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Messages</h1>
          </div>
          <div class="lg:w-2/3 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                   Message
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  createdAt
                  </th>
                  
                  <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                {messages?.length > 0 ? (
                  messages.map((message) => (
                    <tr>
                      <td class="px-4 py-3">{message.message}</td>
                      <td class="px-4 py-3">{message.createdAt}</td>
                     
                    </tr>
                  ))
                ) : (
                  <tr>
                    <p className="text-red-500 text-sm text-center pt-4 inline-block">No messages found</p>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewWorkerMessages;

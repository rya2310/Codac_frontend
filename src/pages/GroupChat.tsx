import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Send, Plus, Hash } from 'lucide-react';

const GroupChat = () => {
  const [message, setMessage] = useState('');

  const channels = [
    { id: 1, name: 'general', unread: 3 },
    { id: 2, name: 'javascript', unread: 0 },
    { id: 3, name: 'react', unread: 5 },
    { id: 4, name: 'typescript', unread: 0 },
  ];

  const messages = [
    { id: 1, user: 'Alice', content: 'Hey everyone! 👋', time: '10:30 AM' },
    { id: 2, user: 'Bob', content: 'Hi Alice! How are you?', time: '10:31 AM' },
    { id: 3, user: 'Charlie', content: 'Welcome to the chat!', time: '10:32 AM' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-100px)]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Channels
              </h2>
              <button className="text-gray-400 hover:text-white">
                <Plus className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-2">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center text-gray-300">
                    <Hash className="h-4 w-4 mr-2" />
                    {channel.name}
                  </div>
                  {channel.unread > 0 && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      {channel.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 bg-gray-800 rounded-lg flex flex-col"
          >
            <div className="p-4 border-b border-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <Hash className="h-5 w-5 text-gray-400 mr-2" />
                <h2 className="text-xl font-semibold text-white">general</h2>
              </div>
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">{msg.user[0]}</span>
                  </div>
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-medium text-white">{msg.user}</span>
                      <span className="text-xs text-gray-400">{msg.time}</span>
                    </div>
                    <p className="text-gray-300 mt-1">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-700">
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 pr-10 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-400">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
import React from 'react';
import { motion } from 'framer-motion';
import { Video, Mic, MessageSquare, Users, Share2 } from 'lucide-react';

const Interview = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            Technical Interview
          </motion.h1>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              <Video className="h-4 w-4" />
              <span>End Call</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 rounded-lg p-4"
            >
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">Waiting for participants...</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-6 mt-4">
                <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                  <Mic className="h-6 w-6 text-white" />
                </button>
                <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                  <Video className="h-6 w-6 text-white" />
                </button>
                <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                  <Share2 className="h-6 w-6 text-white" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800 rounded-lg p-4"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Problem Statement</h2>
              <div className="prose prose-invert">
                <p className="text-gray-300">
                  Implement a function that finds the longest palindromic substring in a given string.
                  The function should return the palindrome with the maximum length.
                </p>
                <pre className="bg-gray-900 p-4 rounded-lg mt-4">
                  <code className="text-gray-300">
                    {`function longestPalindrome(s: string): string {
  // Your implementation here
}`}
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-lg overflow-hidden flex flex-col"
          >
            <div className="p-4 bg-gray-900">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Chat
              </h2>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Interviewer</span>
                <p className="bg-gray-700 rounded-lg p-3 text-white mt-1">
                  Hello! Let's begin with the coding challenge. Feel free to ask any questions.
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-gray-700">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-400">
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
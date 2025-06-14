import React from "react";

const UserCreate = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-b from-purple-500 to-pink-500">
      <div className="bg-gray-200 p-7 rounded-2xl min-w-96 h-fit mx-4">
        <h1 className="text-3xl font-bold text-center">Create User</h1>
        <hr className="mb-4" />
        <form action="">
          <div>
            <label
              htmlFor="name"
              className="block w-full text-lg font-medium mt-2 mb-1 text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              name="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block w-full text-lg font-medium mt-2 mb-1 text-gray-900"
            >
              E-mail
            </label>
            <input
              type="text"
              name="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block w-full text-lg font-medium mt-2 mb-1 text-gray-900"
            >
              Age
            </label>
            <input
              type="text"
              name="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="px-4 py-2 rounded-full mt-4 bg-blue-400 text-sm cursor-pointer font-medium text-gray-800 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserCreate;

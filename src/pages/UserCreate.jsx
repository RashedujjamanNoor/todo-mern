import React, { useState } from "react";
import axios from "axios";

const UserCreate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/create",
        formData
      );

      alert(res.data.message);
      setFormData({
        name: "",
        email: "",
        age: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-b from-purple-500 to-pink-500">
      <div className="bg-gray-200 p-7 rounded-2xl min-w-96 h-fit mx-4">
        <h1 className="text-3xl font-bold text-center">Create User</h1>
        <hr className="mb-4" />
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block w-full text-lg font-medium mt-2 mb-1 text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              required
              onChange={handleChange}
              value={formData.name}
              name="name"
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
              type="email"
              required
              onChange={handleChange}
              value={formData.email}
              name="email"
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
              type="number"
              onChange={handleChange}
              required
              value={formData.age}
              name="age"
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

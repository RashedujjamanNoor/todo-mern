import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios
          .get("http://localhost:3000/api/user")
          .then((res) => setData(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-b from-purple-500 to-pink-500">
      <div className="bg-gray-200 p-7 rounded-2xl min-w-96 h-fit mx-4">
        <h1 className="text-3xl font-bold text-center">User's</h1>
        <hr className="mb-4" />
        <table className="table-auto  w-full text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.age}</td>
                  <td>
                    <button className="bg-gray-500 text-white px-2 py-0.5 rounded-md mr-1">
                      Edit
                    </button>{" "}
                    <button className="bg-red-500 text-white px-2 py-0.5 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

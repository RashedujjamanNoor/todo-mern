import React from "react";

const Home = () => {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Noor</td>
              <td>noor@gmail.com</td>
              <td>25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

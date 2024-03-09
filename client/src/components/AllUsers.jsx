import React, { useEffect, useState } from "react";
import { getUsers } from "../service/api.js";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  return (
    <div className="container">
      <h2 className="text-center mb-3">Added Users</h2>
      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`/edituser/${user._id}`}>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-dark me-2"
                  >
                    Edit
                  </button>
                </Link>
                <button type="button" className="btn btn-sm btn-outline-dark">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;

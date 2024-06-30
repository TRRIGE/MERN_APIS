import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FooterSec from "../components/FooterSec";
import { getUser, deleteUser } from "../api/user.api";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser()
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleEdit = (id) => {};

  const handleDelete = (id) => {
    deleteUser(id)
      .then((response) => {
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row justify-content-center">
          <div className="col">
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                margin: "0 auto",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <thead
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "2px solid #dee2e6",
                }}
              >
                <tr>
                  <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Number</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>
                    Address
                  </th>
                  <th style={{ padding: "10px", textAlign: "left" }}>City</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user._id}
                    style={{ borderBottom: "1px solid #dee2e6" }}
                  >
                    <td style={{ padding: "10px" }}>{user.name}</td>
                    <td style={{ padding: "10px" }}>{user.email}</td>
                    <td style={{ padding: "10px" }}>{user.number}</td>
                    <td style={{ padding: "10px" }}>{user.address}</td>
                    <td style={{ padding: "10px" }}>{user.city}</td>
                    <td style={{ padding: "10px" }}>
                      <button
                        onClick={() => handleEdit(user._id)}
                        style={{
                          padding: "5px 10px 5px 10px",
                          backgroundColor: "#007bff",
                          marginBottom: "5px",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          display: "inline-block",
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user._id)}
                        style={{
                          padding: "5px 10px 5px 10px",
                          backgroundColor: "#dc3545",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          display: "inline-block",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <FooterSec />
    </>
  );
};

export default Users;

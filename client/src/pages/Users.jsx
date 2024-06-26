import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import FooterSec from "../components/FooterSec";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row justify-content-center">
          <div className="col-md-10">
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

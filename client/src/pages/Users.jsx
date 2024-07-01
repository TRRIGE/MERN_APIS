import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FooterSec from "../components/FooterSec";
import { getUser, deleteUser, updateUser } from "../api/user.api";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    city: "",
  });

  useEffect(() => {
    getUser()
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user._id);
    setFormData({
      name: user.name,
      email: user.email,
      number: user.number,
      address: user.address,
      city: user.city,
    });
  };

  const handleDelete = (id) => {
    deleteUser(id)
      .then((response) => {
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(editingUser, formData)
      .then((response) => {
        setUsers(
          users.map((user) => (user._id === editingUser ? response : user))
        );
        setEditingUser(null);
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
                        onClick={() => handleEdit(user)}
                        style={{
                          padding: "5px 10px 5px 10px",
                          backgroundColor: "#007bff",
                          marginBottom: "5px",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Update
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
        {editingUser && (
          <div
            className="row justify-content-center"
            style={{ marginTop: "20px", marginBottom: "100px" }}
          >
            <div className="col-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Number</label>
                  <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Update
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <FooterSec />
    </>
  );
};

export default Users;

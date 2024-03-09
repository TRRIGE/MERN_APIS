import React, { useState } from "react";
import { addUserAPI } from "../service/api.js";
import { useNavigate } from "react-router-dom";
const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const addUserDetails = async () => {
    await addUserAPI(user);
    navigate("/allusers");
  };

  return (
    <div className="container">
      <div className="rwo">
        <div className="col-6 mx-auto">
          <h2 className="text-center mb-3">Add User</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              onChange={(e) => onValueChange(e)}
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputUserName" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUserName"
              aria-describedby="usernameHelp"
              onChange={(e) => onValueChange(e)}
              name="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => onValueChange(e)}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputNumber" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputNumber"
              onChange={(e) => onValueChange(e)}
              name="phone"
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-dark"
              onClick={() => addUserDetails()}
            >
              ADD USER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

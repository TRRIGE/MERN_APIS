import React, { useState, useEffect } from "react";
import { editUserAPI, getUser } from "../service/api.js";
import { useNavigate, useParams } from "react-router-dom";

const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(defaultValue);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
    console.log(response);
  };

  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const editUserDetails = async () => {
    await editUserAPI(user, id);
    navigate("/allusers");
  };

  return (
    <div className="container">
      <div className="rwo">
        <div className="col-6 mx-auto">
          <h2 className="text-center">Edit User</h2>
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
              value={user.name || ""}
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
              value={user.username || ""}
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
              value={user.email || ""}
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
              value={user.phone || ""}
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-dark"
              onClick={() => editUserDetails()}
            >
              EDIT USER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;

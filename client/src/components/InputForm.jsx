import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../api/user.api";

const InputForm = () => {
  // const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    city: "",
  });

  /*
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    const { name, email, number, address, city } = values;

    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, number, address, city }),
    });

    const data = await response.json();

    if (!data) {
      toast("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      toast("Your Form is Submitted Succesfully");
      console.log("Your Form is Submitted Succesfully");
    setValues({
      name: "",
      email: "",
      number: "",
      address: "",
      city: "",
    });
      navigate("/users");
    }

  };

  */

  /*
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(values);

    const { name, email, number, address, city } = values;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        {
          name,
          email,
          number,
          address,
          city,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      if (!data) {
        toast("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        toast("Your Form is Submitted Successfully");
        console.log("Valid Registration");
        // navigate("/users");
        setValues({
          name: "",
          email: "",
          number: "",
          address: "",
          city: "",
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, address, city } = values;

    registerUser({ name, email, number, address, city })
      .then((data) => {
        if (!data) {
          toast("Invalid Registration");
          console.log("Invalid Registration");
        } else {
          toast("Your Form is Submitted Successfully");
          console.log("Valid Registration");
          setValues({
            name: "",
            email: "",
            number: "",
            address: "",
            city: "",
          });
        }
      })
      .catch((error) => {
        toast.error("Error registering user: " + error.message);
        console.log("Error registering user:", error.message);
      });
  };

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6 mx-auto">
          <ToastContainer />
          <form method="POST">
            <div className="form-outline mb-3">
              <input
                type="text"
                id="formName"
                className="form-control"
                onChange={onChangeHandler}
                name="name"
                value={values.name}
                placeholder="Full Name"
                required
              />
              <label className="form-label" htmlFor="formName">
                Full Name
              </label>
            </div>

            <div className="form-outline mb-3">
              <input
                type="email"
                id="formEmail"
                className="form-control"
                onChange={onChangeHandler}
                name="email"
                value={values.email}
                placeholder="Email"
                required
              />
              <label className="form-label" htmlFor="formEmail">
                Email
              </label>
            </div>

            <div className="form-outline mb-3">
              <input
                type="tel"
                id="formNumber"
                className="form-control"
                onChange={onChangeHandler}
                name="number"
                value={values.number}
                placeholder="Phone Number"
                required
              />
              <label className="form-label" htmlFor="formNumber">
                Phone Number
              </label>
            </div>

            <div className="form-outline mb-3">
              <input
                type="text"
                id="formAddress"
                className="form-control"
                onChange={onChangeHandler}
                name="address"
                value={values.address}
                placeholder="Address"
                required
              />
              <label className="form-label" htmlFor="formAddress">
                Address
              </label>
            </div>

            <div className="form-outline mb-3">
              <input
                type="text"
                id="formCity"
                className="form-control"
                onChange={onChangeHandler}
                name="city"
                value={values.city}
                placeholder="State & City"
                required
              />
              <label className="form-label" htmlFor="formCity">
                State & City
              </label>
            </div>

            <div className="d-grid">
              <button
                type="button"
                className="btn btn-primary btn-block mb-3"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputForm;

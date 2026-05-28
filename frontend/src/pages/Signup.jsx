import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

import "./Auth.css";
import { signInWithPopup } from "firebase/auth";
import {auth, provider} from '../firebase';

const Signup = () => {

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({

    email: "",

    password: "",

    username: "",
  });

  const {
    email,
    password,
    username
  } = inputValue;

  const handleOnChange = (e) => {

    const { name, value } = e.target;

    setInputValue({

      ...inputValue,

      [name]: value,
    });
  };

  const handleError = (err) =>

    toast.error(err, {

      position: "bottom-left",
    });

  const handleSuccess = (msg) =>

    toast.success(msg, {

      position: "bottom-left",
    });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const { data } = await axios.post(

        "http://process.env.REACT_APP_API_URL/signup",

        {

          ...inputValue,

        },

        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {

        handleSuccess(message);

        setTimeout(() => {

          window.location.href =
            "http://process.env.REACT_APP_DASHBOARD_URL";

        }, 1000);

      } else {

        handleError(message);
      }

    } catch (error) {

      console.log(error);

      handleError("Something went wrong");
    }

    setInputValue({

      email: "",

      password: "",

      username: "",
    });
  };
  const handleGoogleSignup = async () => {

  try {

    const result =
      await signInWithPopup(
        auth,
        provider
      );

    console.log(result.user);

    toast.success(
      "Google Signup Successful!"
    );

    setTimeout(() => {

      window.location.href =
        "http://process.env.REACT_APP_DASHBOARD_URL";

    }, 1000);

  } catch (error) {

    console.log(error);

    toast.error(
      "Google Signup Failed"
    );
  }
};
  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>Create Account</h1>

        <p>
          Open your Zerodha account
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            required
          />

          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />

          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />

          <button type="submit">

            Signup

          </button>
          <button
  type="button"
  className="google-btn"
  onClick={handleGoogleSignup}
>

  Continue with Google

</button>

        </form>

        <div className="auth-bottom-text">

          Already have an account?{" "}

          <Link to="/login">

            Login

          </Link>

        </div>

      </div>

      <ToastContainer />

    </div>
  );
};

export default Signup;
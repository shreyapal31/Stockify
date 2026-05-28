import React, { useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

import {
  signInWithPopup
} from "firebase/auth";

import {
  auth,
  provider
} from "../firebase";

import "./Auth.css";

const Login = () => {

  const [inputValue, setInputValue] = useState({

    email: "",

    password: "",
  });

  const { email, password } = inputValue;

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

  // Normal Login

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const { data } = await axios.post(

        "http://process.env.REACT_APP_API_URL/login",

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

      handleError(
        "Something went wrong"
      );
    }

    setInputValue({

      email: "",

      password: "",
    });
  };

  // Google Login

  const handleGoogleLogin = async () => {

    try {

      const result =
        await signInWithPopup(
          auth,
          provider
        );

      console.log(result.user);

      toast.success(
        "Google Login Successful!"
      );

      setTimeout(() => {

        window.location.href =
          "http://process.env.REACT_APP_DASHBOARD_URL";

      }, 1000);

    } catch (error) {

      console.log(error);

      toast.error(
        "Google Login Failed"
      );
    }
  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>Login to Zerodha</h1>

        <p>
          Track your investments seamlessly
        </p>

        <form onSubmit={handleSubmit}>

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

            Login

          </button>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleLogin}
          >

            Continue with Google

          </button>

        </form>

        <div className="auth-bottom-text">

          Don't have an account?{" "}

          <Link to="/signup">

            Signup

          </Link>

        </div>

      </div>

      <ToastContainer />

    </div>
  );
};

export default Login;
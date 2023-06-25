import "../styles/Login.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { useH } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRedirect = () => {
    window.location.href = '/register'
  };
  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.length != 0 && password.length != 0) {
      fetch(
        `http://localhost:3330/api/v1/userDetails/getUser?email=${email}&password=${password}`
      )
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          if (responseData.success) {
            console.log(responseData.userDetails.id)
            localStorage.setItem("userId", responseData.userDetails._id)
            alert("Login successful");
            window.location.href = "/index";
          } else {
            alert("Invalid Email Id or Password");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("hewewe");
      alert("Please Enter All Details");
    }
  };
  return (
    <>
      <nav>
        <h1>Welcome to Money Booster</h1>
      </nav>
      <div className="form">
        <label>Enter your email id </label>
        <input
          id="email"
          type="email"
          placeholder="Please enter your email id"
          onChange={handleEmailInput}
          required
        />
        <label>Enter your password </label>
        <div id="password-input">
          <input
            id="pass"
            placeholder="Please enter your password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleInputChange}
            required
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={handleTogglePasswordVisibility}
          />
        </div>
        <button id="login" onClick={handleSubmit}>
          Login
        </button>
        <a href="register">Register Now</a>
      </div>
    </>
  );
}

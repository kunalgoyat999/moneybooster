import "../styles/Forgot.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { useH } from 'react-router-dom';

export default function Forgot() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  
    const handleEmailInput = (event) => {
      setEmail(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      if (email.length != 0 && password.length != 0) {
        fetch(
          `13.200.125.53:3330/api/v1/userDetails/getUser?email=${email}&password=${password}`
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
        <h1>Forgot Password</h1>
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
        
        <button id="sendOtp" onClick={handleSubmit}>
          Send Otp
        </button>
      </div>
    </>
  );
}

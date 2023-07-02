import "../styles/Register.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("1234");
  const [phone, setPhone] = useState(0);

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
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (phone.length !== 10) {
      alert("Please enter a 10-digit number.");
      return;
    }

    fetch(
      `http://localhost:3330/api/v1/userDetails/getUser?email=${email}&password=${password}`
    ).then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      if (responseData.success) {
        alert("User Already Registered");
      
      } else {
        let OTP = ''
          for(let i=0; i<4; i++){
            OTP+= Math.ceil(Math.random()*9);
            setOtp(pre=>OTP)
          }
          console.log(OTP,otp);
            window.Email.send({
              Host : "smtp.elasticemail.com",
              Username : "kunalgoyat999@gmail.com",
              Password : "E2246E549966D5B8B22167DC592B33FDD579",
              To : `${email}`,
              From : "kunalgoyat999@gmail.com",
              Subject : "Money Booster",
              Body : `OTP is :- ${OTP}`
          }).then(
            (message) => {
              alert(`email sent`)
              userRegister() 
            }
          );
      };
    })
  }
    

  const userRegister = () =>{

    const data = {
      email: email,
      password: password,
      name: name,
      phone: phone,
    };
    
    fetch("http://localhost:3330/api/v1/userDetails/postUserDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Handle the response data
        if (responseData.message == "Saved user details") {
          alert("Registration Successfull");
          window.location.href = "/index";
        } else {
          alert("User Already Registered");
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }

  return (
    <>
      <nav>
        <h1>Welcome to Money Booster</h1>
      </nav>
      <div className="form">
        <label>Enter your name </label>
        <input
          id="name"
          type="text"
          placeholder="Please enter your name"
          required
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <label>Enter your email id </label>
        <input
          id="email"
          type="email"
          placeholder="Please enter your email id"
          onChange={handleEmailInput}
          required
          value={email}
        />
        <label>Enter your mobile number </label>
        <input
          id="phone"
          type="number"
          placeholder="+91  10-digit mobile number"
          required
          onChange={(event) => setPhone(event.target.value)}
          value={phone}
        />
        <label>Create your password </label>
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
        <button id="register" onClick={handleSubmit}>
          Register
        </button>
        <p>
          Already have an account?
          <span>
            <a href="/">Login Now</a>
          </span>
        </p>
      </div>
    </>
  );
}

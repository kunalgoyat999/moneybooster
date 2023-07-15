import "../styles/Register.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Button, Input, InputGroup, InputRightElement, Text} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { handleOtp, handleRegister } from "../redux/action";
import { Link, useNavigate, useParams} from "react-router-dom"


export default function Register() {
  // const { name, age, location } = props;
  const { id } = useParams();
  console.log("id", id)
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("1234");
  const [phone, setPhone] = useState("");
  const [refer, setRefer] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const store = useSelector((state)=>state)

  useEffect(()=> {
    if(id !== "ldsfjlsdcak"){
      setRefer(id)
    }
  }, [])


  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

// exiating check
const handleSubmit = (event) => {
  event.preventDefault();

  handleEmailOTP()

  
  
   // Regular expression for email validation
  //  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if (!emailRegex.test(email)) {
  //   alert("Please enter a valid email address.");
  //   return;
  // }

  // if (phone.length !== 10) {
  //   alert("Please enter a 10-digit number.");
  //   return;
  // }
  // if (email.length != 0 && password.length != 0) {
  //   fetch(
  //     `http://localhost:3330/api/v1/userDetails/getUser?email=${email}&password=${password}`
  //   )
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       console.log(responseData);
  //       if (responseData.success) {
  //         console.log(responseData.userDetails.id)
  //         // localStorage.setItem("userId", responseData.userDetails._id)
  //         alert("User Already Registerd");
  //         navigate('/')
  //       } else {
          // handleEmailOTP()
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // } else {
  //   console.log("hewewe");
  //   alert("Please Enter All Details");
  // }
};

  const handleEmailOTP = () =>{
    const data = {
      email: email,
      password: password,
      name: name,
      phone: phone,
    };
    
    fetch("http://13.200.125.53:3330/api/v1/userDetails/postUserDetails", {
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
         if(refer !== "ldsfjlsdcak" && id !== "ldsfjlsdcak"){
          let referData = {
            id: responseData.id,
            refered_id: refer || id
          }
         fetch(`http://13.200.125.53:3330/api/v1/userDetails/refrel`, {
           method: 'POST',
           headers: { 'Content-Type': 'application/json'},
           body: JSON.stringify(referData)
         }).then((response)=> response.json())
           .then((responseData)=> {
             if(responseData.message === "Invalid Refrel Code"){
              alert(responseData.message)
             } else if(responseData.message === "Already Exists"){
               alert(responseData.message)
             } else {
               alert("Registration Successfull");
               window.location.href = "/index";
             }
           })
           localStorage.setItem("userId", responseData.id)
         } else {
          localStorage.setItem("userId", responseData.id)
          alert("Registration Successfull");
          window.location.href = "/index";
         }
       } else {
         alert("User Already Registered");
         window.location.href = '/'
       }
     })
     .catch((error) => {
       // Handle any errors
       console.error(error);
     });
  //   dispatch(handleRegister(data))
  //  let OTP = ''
  //  for(let i=0; i<4; i++){
  //   OTP+= Math.ceil(Math.random()*9);
  //   setOtp(pre=>OTP)
  //  }
  //  console.log(OTP,otp);
  //   window.Email.send({
  //     Host : "smtp.elasticemail.com",
  //     Username : "kunalgoyat999@gmail.com",
  //     Password : "E2246E549966D5B8B22167DC592B33FDD579",
  //     To : `${email}`,
  //     From : "kunalgoyat999@gmail.com",
  //     Subject : "Money Booster",
  //     Body : `OTP is :- ${OTP}`
  // }).then(
  //   (message) => {
  //     dispatch(handleOtp(OTP))
  //     navigate('/otp')
  //   }
  // );

  }

  return (
    <>
      <nav>
        <h1>Welcome to Money Booster</h1>
      </nav>
      <div className="form">
        <label>Enter your name </label>
        <Input
        size='md'
          id="name"
          type="text"
          placeholder="Please enter your name"
          required
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <label>Enter your email id </label>
        <Input
        size='md'
          id="email"
          type="email"
          placeholder="Please enter your email id"
          onChange={handleEmailInput}
          required
          value={email}
        />
        <label>Enter your mobile number </label>
        <Input
        size='md'
          id="phone"
          type="number"
          placeholder="+91  10-digit mobile number"
          required
          onChange={(event) => setPhone(event.target.value)}
          value={phone}
        />
        <label>Create your password </label>
        {/* <div id="password-input">
          <Input
          size='md'
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
        </div> */}

        <InputGroup size='md'>
         <Input
           pr='4.5rem'
           type={showPassword ? 'text' : 'password'}
           placeholder='Enter password'
         />
         <InputRightElement right='11%' top='8%'>
            {/* <Button h='1.75rem' size='sm' onClick={handleTogglePasswordVisibility}>
               {showPassword ? 'Hide' : 'Show'}
            </Button> */}
            <FontAwesomeIcon color="grey" height="10em"
            icon={showPassword ? faEyeSlash : faEye}
            onClick={handleTogglePasswordVisibility}
          />
          </InputRightElement>
        </InputGroup>
        <Text>Do you have refer code?</Text>
        <Input
        size='md'
          id="refer"
          type="refer"
          placeholder="Enter your Referel Code"
          required
          onChange={(event) => setRefer(event.target.value)}
          value={refer}
        />
        <button id="register" onClick={handleSubmit}>
          Register
        </button>
        <p>
          Already have an account?
          <span>
            <Link to="/">  Login Now</Link>
          </span>
        </p>
      </div>
    </>
  );
}

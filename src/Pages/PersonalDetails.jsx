import React, { useEffect, useState } from "react";
import "../styles/bank.css";
import {
  Button,
  ButtonGroup,
  Center,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

let initDetails = {
  name: "Rohit",
  phone: "9123456789",
  email: "demo@gmail.com",
};
export const PersonalDetailsPage = () => {
  let navigate = useNavigate();
  const [id, setId] = useState();
  const [personal_details, setpersonal_details] = useState({});

  const handleSubmit = () => {
    let data = {
      id, id,
      name: personal_details.name,
      phone: personal_details.phone,
      email: personal_details.email
    }
    fetch(`http://localhost:3330/api/v1/userDetails/updateProfile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then((response)=> response.json())
      .then((responseData)=> {
        if(responseData.message === "User updated Successfully"){
         alert("User Update Successfull")
        } else {
          alert("Something Went Wrong");
        }
      })
  };

  useEffect(()=> {
    let userId = localStorage.getItem("userId") || "";
    setId(userId);
    fetch(`http://localhost:3330/api/v1/userDetails/homePage?id=${userId}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setpersonal_details(responseData.userDetails)

      })
      .catch((error) => {
        console.error(error);
      });
  }, [])


  return (
    <div className="bank-page">
      <Text onClick={() => navigate(-1)}>
        <IoIosArrowBack />{" "}
      </Text>
      <Text as="h1" h="100px" mt="0.5" size="5xl" fontWeight="700">
        Personal Details
      </Text>
      <Stack bg="white" className="bank_input_box" spacing={4}>
        <FormControl isRequired>
          <FormLabel>Enter your name </FormLabel>
          <Input
            placeholder="please enter your name"
            type="text"
            value={personal_details.name}
            onChange={(e) => {
              setpersonal_details({
                ...personal_details,
                name: e.target.value,
              });
            }}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Enter your mobile number </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" left="5%">
              +91
            </InputLeftElement>
            <Input
              type="number"
              placeholder="please enter your phone number"
              value={personal_details.phone}
              onChange={(e) => {
                setpersonal_details({
                  ...personal_details,
                  phone: e.target.value,
                });
              }}
            />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Enter your email id</FormLabel>
          <Input
            placeholder="Please enter your email id"
            value={personal_details.email}
            onChange={(e) => {
              setpersonal_details({
                ...personal_details,
                email: e.target.value,
              });
            }}
          />
        </FormControl>

        <Button colorScheme="" onClick={handleSubmit}>
          Confirm
        </Button>
      </Stack>
    </div>
  );
};

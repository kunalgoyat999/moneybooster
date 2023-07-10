import React, { useEffect, useState } from 'react';
import "../../styles/bank.css"
import { Button, ButtonGroup, Center, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io';
import { Stack } from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom'

export const BankPage = () => {
    let navigate = useNavigate()
  const [bankdetails, setBankDetails] = useState({});
  const [id, setId] = useState();

  useEffect(()=> {
    let userId = localStorage.getItem("userId") || "";
    setId(userId);
    fetch(`http://localhost:3330/api/v1/userDetails/homePage?id=${userId}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setBankDetails(responseData.userDetails)

      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  const handleSubmit = () => {
    let data = {
      id, id,
      account_number: bankdetails.account_number,
      ifsc_code: bankdetails.ifsc_code,
      bankName: bankdetails.bank_name
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

  return (
    <div className="bank-page">
    <Text onClick={()=>navigate(-1)} ><IoIosArrowBack/> </Text>
    <Text as='h1' h='100px'mt='0.5'  size='5xl' fontWeight='700'>
     My Bank
     </Text>
 <Stack bg='white' className='bank_input_box' spacing={4}>
      
      
     {/* <FormControl isRequired>
         <FormLabel size='5px'>Enter your name </FormLabel>
         <Input placeholder='Enter your name ' onChange={(e)=>{setBankDetails({...bankdetails,name:e.target.value})}} />
     </FormControl> */}
       
     {/* <FormControl isRequired> */}
     {/* <FormLabel>Enter your mobile number </FormLabel> */}
      {/* <InputGroup>
       <InputLeftElement pointerEvents='none' left='5%'>
         +91
       </InputLeftElement>
       <Input type='number' placeholder='Phone number' onChange={(e)=>{setBankDetails({...bankdetails,phone:e.target.value})}} />
     </InputGroup> */}
     {/* </FormControl> */}

     <FormControl isRequired>
         <FormLabel>Enter your bank account </FormLabel>
         <Input placeholder='Enter your bank account ' type='number' value={bankdetails.account_number} onChange={(e)=>{setBankDetails({...bankdetails,account_number:e.target.value})}} />
     </FormControl>

     <FormControl isRequired>
         <FormLabel>Enter your bank name</FormLabel>
         <Input placeholder='Please enter your bank name' value={bankdetails.bank_name} onChange={(e)=>{setBankDetails({...bankdetails,bank_name:e.target.value})}}/>
     </FormControl>

     <FormControl isRequired>
         <FormLabel>Enter your IFSC Code</FormLabel>
         <Input placeholder='Please enter your IFSC Code' value={bankdetails.ifsc_code} onChange={(e)=>{setBankDetails({...bankdetails,ifsc_code:e.target.value})}} />
     </FormControl>

     {/* <FormControl isRequired>
         <FormLabel>Enter your withdraw password</FormLabel>
         <Input placeholder='Please enter your withdraw password' onChange={(e)=>{setBankDetails({...bankdetails,withdraw_pass:e.target.value})}}  />
     </FormControl> */}
     <Button colorScheme='' onClick={handleSubmit}>Confirm</Button>
     </Stack>
    </div>
  );
};

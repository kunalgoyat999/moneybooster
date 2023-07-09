import React, { useEffect, useState } from 'react';
import "../../styles/bank.css"
import { Button, ButtonGroup, Center, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io';
import { Stack } from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom'
let initDetails = {
    name:'',
phone:'',
account_number:'',
bank_name:'',
ifsc_code:'',
withdraw_pass:''
}
export const BankPage = () => {
    let navigate = useNavigate()
  const [bankdetails, setBankDetails] = useState(initDetails);

  const handleSubmit = () => {
    console.log(bankdetails,'dvs');
  };

  useEffect(()=>{
// console.log(bankdetails);
  },[])

  return (
    <div className="bank-page">
    <Text onClick={()=>navigate(-1)} ><IoIosArrowBack/> </Text>
    <Text as='h1' h='100px'mt='0.5'  size='5xl' fontWeight='700'>
     My Bank
     </Text>
 <Stack bg='white' className='bank_input_box' spacing={4}>
      
      
     <FormControl isRequired>
         <FormLabel size='5px'>Enter your name </FormLabel>
         <Input placeholder='Enter your name ' onChange={(e)=>{setBankDetails({...bankdetails,name:e.target.value})}} />
     </FormControl>
       
     <FormControl isRequired>
     <FormLabel>Enter your mobile number </FormLabel>
      <InputGroup>
       <InputLeftElement pointerEvents='none' left='5%'>
         +91
       </InputLeftElement>
       <Input type='number' placeholder='Phone number' onChange={(e)=>{setBankDetails({...bankdetails,phone:e.target.value})}} />
     </InputGroup>
     </FormControl>

     <FormControl isRequired>
         <FormLabel>Enter your bank account </FormLabel>
         <Input placeholder='Enter your bank account ' type='number' onChange={(e)=>{setBankDetails({...bankdetails,account_number:e.target.value})}} />
     </FormControl>

     <FormControl isRequired>
         <FormLabel>Enter your bank name</FormLabel>
         <Input placeholder='Please enter your bank name' onChange={(e)=>{setBankDetails({...bankdetails,bank_name:e.target.value})}}/>
     </FormControl>

     <FormControl isRequired>
         <FormLabel>Enter your IFSC Code</FormLabel>
         <Input placeholder='Please enter your IFSC Code' onChange={(e)=>{setBankDetails({...bankdetails,ifsc_code:e.target.value})}} />
     </FormControl>

     <FormControl isRequired>
         <FormLabel>Enter your withdraw password</FormLabel>
         <Input placeholder='Please enter your withdraw password' onChange={(e)=>{setBankDetails({...bankdetails,withdraw_pass:e.target.value})}}  />
     </FormControl>
     <Button colorScheme='' onClick={handleSubmit}>Button</Button>
     </Stack>
    </div>
  );
};

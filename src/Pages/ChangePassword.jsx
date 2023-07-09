import React, { useEffect, useState } from 'react';
import "../styles/bank.css"
import { Button, ButtonGroup, Center, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io';
import { Stack } from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom'
let initDetails = {
phone:'',
account_number:'',
old_pass:'',
new_pass:''
}
export const ChangePassword = () => {
    let navigate = useNavigate()
  const [withdraw, setwithdraw] = useState(initDetails);

  const handleSubmit = () => {
    // console.log(withdraw,'dvs');
  };

  useEffect(()=>{
// console.log(withdraw);
  },[])

  return (
    <div className="bank-page">
    <Text onClick={()=>navigate(-1)} ><IoIosArrowBack/> </Text>
    <Text as='h1' h='100px'mt='0.5'  size='5xl' fontWeight='700'>
    Change login password
     </Text>
 <Stack bg='white' className='bank_input_box' spacing={4}>
      
     <FormControl isRequired>
     <FormLabel>Enter your mobile number </FormLabel>
      <InputGroup>
       <InputLeftElement pointerEvents='none' left='5%'>
         +91
       </InputLeftElement>
       <Input type='number' placeholder='Phone number' onChange={(e)=>{setwithdraw({...withdraw,phone:e.target.value})}} />
     </InputGroup>
     </FormControl>

     <FormControl isRequired>
         <FormLabel>Enter your bank account </FormLabel>
         <Input placeholder='Enter your bank account ' type='number' onChange={(e)=>{setwithdraw({...withdraw,account_number:e.target.value})}} />
     </FormControl>

     <FormControl isRequired>
         <FormLabel>Enter your old login password</FormLabel>
         <Input placeholder='Please enter your old password' onChange={(e)=>{setwithdraw({...withdraw,old_pass:e.target.value})}}/>
     </FormControl>

     <FormControl isRequired>
         <FormLabel>Enter your new login password</FormLabel>
         <Input placeholder='Please enter your new password' onChange={(e)=>{setwithdraw({...withdraw,new_pass:e.target.value})}} />
     </FormControl>

     <Button colorScheme='' onClick={handleSubmit}>Confirm</Button>
     </Stack>
    </div>
  );
};

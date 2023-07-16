import React, { useEffect, useState } from "react";
import "../../styles/bank.css";
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

export const BankPage = () => {
  let navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [ifsc, setIFSC] = useState("");
  const [bank, setBank] = useState("");
  const [id, setId] = useState();

  useEffect(() => {
    let userId = localStorage.getItem("userId") || "";
    setId(userId);
    fetch(`https://cashbooster.info/api/v1/userDetails/homePage?id=${userId}`)
      .then((response) => response.json())
      .then((responseData) => {
        setAccount(responseData.userDetails.accountNo)
        setIFSC(responseData.userDetails.ifscCode);
        setBank(responseData.userDetails.bankName)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = () => {
    if(account === "" || bank === "" || ifsc === ""){
      alert("Please enter full Details")
    } else {
      let data = {
        id,
        id,
        account_number: account,
        ifsc_code: ifsc,
        bankName: bank,
      };
      fetch(`https://cashbooster.info/api/v1/userDetails/updateBankInfo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData.message === "User updated Successfully") {
            alert("User Update Successfull");
          } else {
            alert("Something Went Wrong");
          }
        });
    }
      
  };

  return (
    <div className="bank-page">
      <Text onClick={() => navigate(-1)}>
        <IoIosArrowBack />{" "}
      </Text>
      <Text as="h1" h="100px" mt="0.5" size="5xl" fontWeight="700">
        My Bank
      </Text>
      <Stack bg="white" className="bank_input_box" spacing={4}>
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
          <Input
            placeholder="Enter your bank account "
            type="number"
            value={account}
            onChange={(e) => {setAccount(e.target.value)}}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Enter your bank name</FormLabel>
          <Input
            placeholder="Please enter your bank name"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            required
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Enter your IFSC Code</FormLabel>
          <Input
            placeholder="Please enter your IFSC Code"
            value={ifsc}
            onChange={(e) => {setIFSC(e.target.value)}}
          />

        </FormControl>
        
        {/* <FormControl isRequired>
         <FormLabel>Enter your withdraw password</FormLabel>
         <Input placeholder='Please enter your withdraw password' onChange={(e)=>{setBankDetails({...bankdetails,withdraw_pass:e.target.value})}}  />
     </FormControl> */}
        <Button colorScheme="" onClick={handleSubmit}>
          Confirm
        </Button>
        <div>
        <Text style={{fontSize: "12px", color: "red"}}>Note:- Please enter your details carefully</Text>
        </div>
      </Stack>
      
    </div>
  );
};

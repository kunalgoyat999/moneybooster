import { Input, Stack, Button, Center } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { userRegister } from "../redux/action";
import { useNavigate } from "react-router-dom";
export const Otp = () => {
  const [inputOtp, setInput] = useState("");
  const navigate = useNavigate()
  const curr_otp = useSelector((state) => state.otp);
  const data = useSelector((state) => state.user);
  console.log(curr_otp,data);

  const handleSubmit = () =>{
    if(curr_otp === inputOtp){
       userRegister(data)
    }else{
        alert('Invalid Otp')
    }
  }
  return (
    <>
      <Center h="100px" fontSize="150%" fontWeight="bold">
        Enter OTP
      </Center>
      <div className="form">
        <Stack spacing={3} id="otp">
          <Input
            placeholder="Enter OTP"
            size="md"
            variant="outline"
            onChange={(e) => setInput(e.target.value)}
            value={inputOtp}
          />
          <Button size="md" border="2px" borderColor="green.500" onClick={handleSubmit}>
            Verify
          </Button>
        </Stack>
      </div>
    </>
  );
};

export const CURR_OTP = "CURR_OTP"
export const USER_DATA = "USER_DATA"
export const handleOtp = (payload) => {
   return {
    type:CURR_OTP,
    payload
   }
}

export const handleRegister = (payload) => {
   return {
    type:USER_DATA,
    payload
   }
}



// export const userRegister = (data) => {
//    let { email, password, name, phone} = data

//    fetch("https://cashbooster.info/api/v1/userDetails/postUserDetails", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify(data),
//    })
//      .then((response) => response.json())
//      .then((responseData) => {
//        // Handle the response data
//        if (responseData.message == "Saved user details") {
//          alert("Registration Successfull");
//          navigate("/index")
//        } else {
//          alert("User Already Registered");
//          navigate("/")
//        }
//      })
//      .catch((error) => {
//        // Handle any errors
//        console.error(error);
//      });
//  };
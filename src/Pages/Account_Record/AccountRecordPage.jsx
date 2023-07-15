import React, { useEffect, useState } from "react";
import "../../styles/accountRec.css";
import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Records } from "./Records";
import { json, useNavigate } from "react-router-dom";

const intiData = [
  {
    date_time:'17-03-2023 08:10',
    type:'Withdraw',
    price:'845'
  },
  {
    date_time:'14-05-2023 11:10',
    type:'Income',
    price:'200'
  },
  {
    date_time:'17-03-2023 08:10',
    type:'Recharge',
    price:'845'
  }
]

const AccountRecordPage = () => {
  const [level, setLevel] = useState(1);
  const [account_transaction, setaccount_transaction] = useState([]);
  let navigate = useNavigate()
  
  useEffect(() => {
    let id = localStorage.getItem("userId") || "";

    fetch(`http://13.200.125.53:3330/api/v1/userDetails/accountRecord?id=${id}&level=${level}`)
    .then((response)=> response.json())
    .then((res)=> {
      console.log("res", res)
      let arr = res.results
      let newArr = arr.slice().reverse()
      setaccount_transaction(newArr)
    })
  }, [level]);



  const handleLevelChange = (num) => {
    setLevel(num)
    // setaccount_transaction([]);
  };

  return (
    <div className="team-page">
      <Text onClick={()=>navigate(-1)}>
        <IoIosArrowBack />{" "}
      </Text>
      <h2>Account Record</h2>
      <section>
       
        <div className="team_member" style={{marginTop:'2em'}}>
          <button
            className={level === 1 && "active_member_sec"}
            onClick={() => handleLevelChange(1)}
          >
            All types
          </button>
          <button
            className={level === 2 && "active_member_sec"}
            onClick={() => handleLevelChange(2)}
          >
           Withdrawals
          </button>
          <button
            className={level === 3 && "active_member_sec"}
            onClick={() => handleLevelChange(3)}
          >
           Recharge
          </button>
        </div>
        <Records level={level} data={account_transaction}/>
      </section>
    </div>
  );
};

export default AccountRecordPage;

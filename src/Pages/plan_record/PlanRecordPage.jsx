import React, { useEffect, useState } from "react";
import "../../styles/plan.css";
import {  Text } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Plan } from "./Plan";

const intiData = [
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

const PlanRecordPage = () => {
  const [level, setLevel] = useState(1);
  const [planRecord, setplanRecord] = useState(intiData);
  let navigate = useNavigate()
  
  useEffect(() => {
    
  }, [level]);



  const handleLevelChange = (num) => {
    setLevel(num);
    // setplanRecord([]);
  };

  return (
    <div className="team-page">
      <Text onClick={()=>navigate(-1)}>
        <IoIosArrowBack />{" "}
      </Text>
      <h2>Plan Record</h2>
      <section>
       
        <div className="plan_details" style={{marginTop:'2em'}}>
          <button
            className={level === 1 && "active_member_sec"}
            onClick={() => handleLevelChange(1)}
          >
            Income
          </button>
          <button
            className={level === 2 && "active_member_sec"}
            onClick={() => handleLevelChange(2)}
          >
          Finish
          </button>
        </div>
        <Plan level={level} data={planRecord}/>
      </section>
    </div>
  );
};

export default PlanRecordPage;

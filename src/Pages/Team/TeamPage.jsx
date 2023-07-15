import React, { useEffect, useState } from "react";
import "../../styles/team.css";
import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { TeamMember } from "./TeamMember";
import { json } from "react-router-dom";

const TeamPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [level, setLevel] = useState(1);
  let [userData, setUserData] = useState({});
  const [id, setId] = useState("");
  const [userLevel1, setuserLevel1] = useState([]);
  const [totalMem, setTotalMem] = useState(0);

  useEffect(() => {
    let userId = localStorage.getItem("userId") || "";
    fetch(`http://13.200.125.53:3330/api/v1/userDetails/homePage?id=${userId}`)
      .then((response) => response.json())
      .then((responseData) => {
        setUserData(responseData.userDetails);
        let num = responseData.userDetails.level1.length + responseData.userDetails.level2.length+ responseData.userDetails.level3.length;
        setTotalMem(num)
      })
      
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (userData.level1 !== undefined) {
      Promise.all(
        userData.level1.map((userId) =>
          fetch(`http://13.200.125.53:3330/api/v1/userDetails/homePage?id=${userId}`)
            .then((response) => response.json())
            .then((responseData) => responseData.userDetails)
            .catch((error) => {
              console.error(error);
              return null;
            })
        )
      )
        .then((results) => {
          setuserLevel1(results.filter((data) => data !== null));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userData]);

  const handleLevelChange = (num) => {
    setLevel(num);
    setuserLevel1([]);
    const levelData = userData[`level${num}`];
    if (levelData !== undefined) {
      Promise.all(
        levelData.map((userId) =>
          fetch(`http://13.200.125.53:3330/api/v1/userDetails/homePage?id=${userId}`)
            .then((response) => response.json())
            .then((responseData) => responseData.userDetails)
            .catch((error) => {
              console.error(error);
              return null;
            })
        )
      )
        .then((results) => {
          setuserLevel1(results.filter((data) => data !== null));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="team-page">
      <Text>
        <IoIosArrowBack />{" "}
      </Text>
      <h2>My team</h2>
      <section>
        <div className="search-container">
          {/* <InputGroup>
            <InputLeftElement pointerEvents="none">
              <BsSearch color="white.400" />
            </InputLeftElement>

            <Input
              type="search"
              placeholder="Search..."
              variant="flushed"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </InputGroup> */}
        </div>

        <div className="flex-container">
          {/* <div className="box">
            <Text as="abbr">Team assets</Text>
            <Text as="abbr">₹ 0.00</Text>
          </div>
          <div className="box">
            <Text as="abbr">Team recharge</Text>
            <Text as="abbr">₹ 0.00</Text>
          </div> */}
          <div className="box">
            <Text as="abbr">Team member</Text>
            <Text as="abbr">{totalMem}</Text>
          </div>
        </div>
        <div className="team_member">
          <button
            className={level === 1 && "active_member_sec"}
            onClick={() => handleLevelChange(1)}
          >
            First
          </button>
          <button
            className={level === 2 && "active_member_sec"}
            onClick={() => handleLevelChange(2)}
          >
            Second
          </button>
          <button
            className={level === 3 && "active_member_sec"}
            onClick={() => handleLevelChange(3)}
          >
            Three
          </button>
        </div>
        <TeamMember level={level} data={userLevel1}/>
      </section>
    </div>
  );
};

export default TeamPage;

import React, { useEffect, useState } from 'react';
import "../../styles/team.css"
import { Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io';
import { TeamMember } from './TeamMember';

const TeamPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [level, setLevel] = useState(1);

  const handleLevel = (num) => {
    setLevel(num)
    console.log(level);
  };

  useEffect(()=>{
console.log(searchValue);
  },[level,searchValue])

  return (
    <div className="team-page">
    <Text><IoIosArrowBack/> </Text>
      <h2 >My team</h2>
      <section>
        <div className="search-container">
          

          <InputGroup>

          <InputLeftElement pointerEvents='none'>
          <BsSearch color='white.400' />
          </InputLeftElement>

          <Input 
          type='search'
           placeholder='Search...' 
           variant='flushed'
           onChange={(e)=>setSearchValue(e.target.value)}
          />

        </InputGroup>

        </div>

        <div className="flex-container">
          <div className="box">
           <Text as='abbr'>Team assets</Text>
           <Text as='abbr'>₹ 0.00</Text>
          </div>
          <div className="box">
           <Text as='abbr'>Team recharge</Text>
           <Text as='abbr'>₹ 0.00</Text>
          </div>
          <div className="box">
           <Text as='abbr'>Team member</Text>
           <Text as='abbr'>0</Text>
          </div>
        </div>
         <div className='team_member'>
         <button  className={level===1&&'active_member_sec'} onClick={()=>handleLevel(1)}>First</button>
         <button className={level===2&&'active_member_sec'}  onClick={()=>handleLevel(2)}>Second</button>
         <button className={level===3&&'active_member_sec'}  onClick={()=>handleLevel(3)}>Three</button>
         </div>
           <TeamMember level={level} />
        
      </section>
    </div>
  );
};

export default TeamPage;

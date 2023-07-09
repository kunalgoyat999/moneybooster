import React from 'react';
import "../../styles/profile.css"
import { Image, Button, ButtonGroup, TagRightIcon, Text  } from '@chakra-ui/react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiEdit, BiSupport } from "react-icons/bi"; 
import { PiNoteLight,PiNotepadLight } from "react-icons/pi"; 
import { SiInformatica } from "react-icons/si"; 
import { MdLogout } from "react-icons/md"; 



export const ProfilePage = () => {
  const handleButtonClick = (buttonName) => {
    console.log(`Button ${buttonName} clicked!`);
    // You can add your desired logic or actions here
  };

  return (
    <div className="profile-page">
         <Text><IoIosArrowBack/> </Text>
      <div className="profile-section">
        {/* <img src="profile-image.jpg" alt="Profile" className="profile-image" /> */}
        <Image
         borderRadius='50%'
         boxSize='140px'
         src='https://bit.ly/dan-abramov'
         alt='Dan Abramov'
        />
        <h2 className="profile-name">John Doe</h2>
      </div>
     
      <div className='profile_sec'>
      <div className="demo-names">
        <div className="demo-name">
        <Text as='abbr'>Asset</Text> 
        <Text as='abbr'>0.00</Text>
        </div>
        <div className="demo-name">
        <Text as='abbr'>Recharge</Text> 
        <Text as='abbr'>1580</Text>
         </div>
        <div className="demo-name">
        <Text as='abbr'>Income</Text> 
        <Text as='abbr'>860</Text>
         </div>
      </div>

      <ButtonGroup className="button-section" id='button-section'>
        <Button leftIcon={<BiEdit />}    className="profile-button"  rightIcon={<IoIosArrowForward />} onClick={() => handleButtonClick(1)}>
        
          <Text as='b'>Personal details</Text>
        </Button>
        <Button leftIcon={<PiNoteLight />} className="profile-button"   rightIcon={<IoIosArrowForward />} onClick={() => handleButtonClick(2)}>
            
          <Text as='b'>Plan Record</Text>
          
        </Button>
        <Button leftIcon={<PiNotepadLight />}  className="profile-button"   rightIcon={<IoIosArrowForward />} onClick={() => handleButtonClick(3)}>
            
          <Text as='b'>Account Record</Text>
          
        </Button>
        <Button leftIcon={<BiSupport />} className="profile-button"   rightIcon={<IoIosArrowForward />} onClick={() => handleButtonClick(4)}>
            
          <Text as='b'>Security Center</Text>
         
        </Button>
        <Button leftIcon={<SiInformatica />} className="profile-button"   rightIcon={<IoIosArrowForward />} onClick={() => handleButtonClick(5)}>
            
          <Text as='b'>Company Profile</Text>
          
        </Button>
        
      </ButtonGroup>
      <Button id='profile-logout' leftIcon={<MdLogout />}  w='90%' color='#E84B41' lineHeight='4em' colorScheme='teal' variant='ghost'>
      Logout
      </Button>
      </div>
    </div>
  );
};

export default ProfilePage;

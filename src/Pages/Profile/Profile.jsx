import React from 'react';
import "../../styles/profile.css"
import { Image, Button, ButtonGroup, TagRightIcon, Text  } from '@chakra-ui/react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiEdit, BiSupport } from "react-icons/bi"; 
import { PiNoteLight,PiNotepadLight } from "react-icons/pi"; 
import { SiInformatica } from "react-icons/si";  
import { RiLockPasswordLine } from "react-icons/ri";  
import { CiBank } from "react-icons/ci"; 
import { MdLogout } from "react-icons/md"; 
import { useNavigate } from 'react-router-dom';



export const ProfilePage = () => {
  let navigate = useNavigate()

  const handleButtonClick = (buttonName) => {
    console.log(`Button ${buttonName} clicked!`);
    // You can add your desired logic or actions here
  };

  return (
    <div className="profile-page">
         <Text onClick={()=>navigate(-1)}><IoIosArrowBack/> </Text>
      <div className="profile-section">
        {/* <img src="profile-image.jpg" alt="Profile" className="profile-image" /> */}
        <Image
         borderRadius='50%'
         boxSize='140px'
         src={require('../../assests/user.png')}
         alt='Dan Abramov'
        />
        <Text fontSize='1.5em' as='b' className="profile-name">John Doe</Text>
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
        <Button leftIcon={<BiEdit />}    className="profile-button"  rightIcon={<IoIosArrowForward />} onClick={() => navigate('/personal')}>
        
          <Text as='abbr'>Personal details</Text>
        </Button>
        <Button leftIcon={<PiNoteLight />} className="profile-button"   rightIcon={<IoIosArrowForward />} onClick={() => handleButtonClick(2)}>
            
          <Text as='abbr'>Plan Record</Text>
          
        </Button>
        <Button leftIcon={<PiNotepadLight />}  className="profile-button"   rightIcon={<IoIosArrowForward />} onClick={() => handleButtonClick(3)}>
            
          <Text as='abbr'>Account Record</Text>
          
        </Button>
        <Button leftIcon={<CiBank />} className="profile-button"   rightIcon={<IoIosArrowForward />} onClick={() => navigate('/my-bank')}>
            
          <Text as='abbr'>My Bank</Text>
         
        </Button>
        <Button leftIcon={<BiSupport />} className="profile-button"   rightIcon={<IoIosArrowForward />} onClick={() => handleButtonClick(5)}>
            
            <Text as='abbr'>Contact Us</Text>
            
          </Button>
        <Button leftIcon={<SiInformatica />} className="profile-button"   rightIcon={<IoIosArrowForward />} onClick={() => handleButtonClick(5)}>
            
          <Text as='abbr'>Company Profile</Text>
          
        </Button>
        <Button leftIcon={<RiLockPasswordLine />} className="profile-button"   rightIcon={<IoIosArrowForward />} onClick={() => navigate('/change-password')}>
            
            <Text as='abbr'>Change Password</Text>
            
          </Button>
        
      </ButtonGroup>
      <Button id='profile-logout' leftIcon={<MdLogout />}  w='90%' color='#E84B41' lineHeight='4em' colorScheme='' variant='ghost'>
      Logout
      </Button>
      </div>
    </div>
  );
};

export default ProfilePage;

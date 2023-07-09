
import { Icon, Text } from "@chakra-ui/react"
import { IoMdMore } from "react-icons/io";
import {Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";

export const Footer = () => {

    return (
    <footer className="footer-sticky">
       <Link to='/index' onClick={()=>console.log('xcs')}  >
        <div style={{
             marginLeft: "45px"
        }}>
        <AiFillHome/>
         
        <Text>
        Home
        </Text>
        </div>
    </Link>
    <Link to={'/team'}  >
        <div style={{
             marginLeft: "45px"
        }}>
        <CgProfile/>
         
        <Text  >
        Team
        </Text>
        </div>
    </Link>
    <Link to={'/Profile'} onClick={()=>console.log('xcs')}  >
        <div style={{
             marginLeft: "45px"
        }}>
         
         <IoMdMore/>
        <Text >
        Profile
        </Text>
        </div>
    </Link>
    </footer>
    )
}
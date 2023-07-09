import { FooterSec } from "./FooterSec"
import { Icon, Link, Text } from "@chakra-ui/react"
import { IoMdMore } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";

export const Footer = () => {

    return (
    <footer className="footer-sticky">
       <Link to={'/index'}  >
        <div style={{
             marginLeft: "45px"
        }}>
        <AiFillHome/>
         
        <Text>
        Home
        </Text>
        </div>
    </Link>
    <Link to={'/invite'}  >
        <div style={{
             marginLeft: "45px"
        }}>
        <CgProfile/>
         
        <Text  >
        Team
        </Text>
        </div>
    </Link>
    <Link to={'Profile'}  >
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
import { Link, Text } from "@chakra-ui/react"

export const FooterSec = ({ele}) => {
    return (
    <>
    <Link to={ele.path} >
        <div style={{
             marginLeft: "45px"
        }}>
         <i class={ele.icon} style={{color:'black'}}></i>
         
         
        <Text style={{ color: "black" }}>
         {ele.title}
        </Text>
        </div>
    </Link>
    </>
    )
}
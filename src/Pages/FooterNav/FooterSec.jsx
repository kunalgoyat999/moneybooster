import { Link, Text } from "@chakra-ui/react"

export const FooterSec = ({ele}) => {
    return (
    <>
    <Link to={ele.path} >
         <i class={ele.icon} color='#9ca1ab'></i>
         
        <Text>
         {ele.title}
        </Text>
    </Link>
    </>
    )
}
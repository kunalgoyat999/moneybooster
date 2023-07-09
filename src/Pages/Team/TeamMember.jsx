import { useEffect, useState } from "react"
import { MemberCard } from "./MemberCard"
import { Text } from "@chakra-ui/react"

let first = [{
    title:'first',
    img:'https://bit.ly/dan-abramov'
}
]

let second = [{
    title:'Second',
    img:'https://bit.ly/dan-abramov'
}
]

let third = [{
    title:'Third',
    img:'https://bit.ly/dan-abramov'
}
]

export const  TeamMember = ({level}) => {
let [members,setMembers]= useState([])

useEffect(()=>{
level===1 ? (setMembers([...first])) : (level===2 ? setMembers([...second]) : setMembers([...third]))
},[level])
    return(
    <div className="member_container">
    {
        members.length===0?<Text as='abbr'>No record</Text> : <div>
        {
            members.map((ele,i)=><MemberCard card={ele} i={i} key={i}/>)
        }
        </div>
    }
    </div>
    )
}
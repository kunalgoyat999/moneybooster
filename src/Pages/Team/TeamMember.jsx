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
    img:'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A='
}
]

let third = [{
    title:'Third',
    img:'https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.webp?b=1&s=170667a&w=0&k=20&c=8D_YP_bxKh8CH_W3n0kKr9bzQjZeYxUv9QgqfXjHNX8='
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
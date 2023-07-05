import { FooterSec } from "./FooterSec"


export const Footer = () => {
    let FooterArr = [{
        path:'/index',
        title:'Home',
        icon:'fa-solid fa-house',
    },{
        path:'/invite',
        title:'Team',
        icon:'fa-solid fa-user'
    },{
        path:'/',
        title:'Profile',
        icon:'fa-solid fa-user'
    },
     ]
    return (
    <footer className="footer-sticky">
        {
         FooterArr.map((ele,i)=>(<FooterSec ele={ele} key={i} />))
        }
    </footer>
    )
}
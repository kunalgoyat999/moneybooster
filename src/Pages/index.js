import "../styles/index.css"
import plan1 from "../assests/plans/1.png"
import Image from "../assests/Image 3.png";
import { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import groupSvg from '../assests/Group.svg';
import inviteSvg from "../assests/invite.svg"
import supportSvg from "../assests/support.svg"
import withdrawSvg from "../assests/withdraw.svg"

export default function () {
  let [auth, setAuth] = useState(false)

  useEffect(()=> {
    let userId = localStorage.getItem("userId") || "";

    fetch(`http://localhost:3330/api/v1/userDetails/homePage?id=${userId}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setAuth(true)
      })
      .catch((error) => {
        console.error(error);
      });
  })
  
  const handleRecharge = () => {
    window.location.href='https://pmny.in/4r5Q7oueGlw5'
  }

  return (
    <>
    {
      auth ? 
      <>
      <nav>
        <h1>Money Booster</h1>
      </nav>
      <Carousel showThumbs={false} showStatus={false} autoPlay={true} interval={2000}>
      <div>
        <img src={require("../assests/Image 2.png")} alt="Image 1" />
      </div>
      <div>
        <img src={require("../assests/Image 3.png")} alt="Image 2" />
      </div>
      <div>
        <img src={require("../assests/Image 1.png")} alt="Image 3" />
      </div>
    </Carousel>
      <section>
        <div className="btn-sec">
          <button onClick={handleRecharge}>
          {/* <div dangerouslySetInnerHTML={{ __html: GroupSvg }} /> */}
            <img style={{width: "12%"}} src={groupSvg} alt="" /> <span>Recharge</span>{" "}
          </button>
          
          <button onClick={()=> window.location.href="/invite"}>
            <img style={{width: "12%"}} src={inviteSvg} alt="" /> <span>Invite people</span>
          </button>
          <button>
            <img style={{width: "12%"}} src={supportSvg} alt="" /> <span>Support</span>
          </button>
          <button onClick={()=> window.location.href="/withdraw"}>
            <img style={{width: "12%"}} src={withdrawSvg} alt="" /> <span>Withdraw</span>
          </button>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="transaction">
            <div>
              <p>assets</p>
              <p className="assest">0.00</p>
            </div>
            <div>
              <p>Recharge</p>
              <p className="recharge">1580</p>
            </div>
            <div>
              <p>Income</p>
              <p className="income">860</p>
            </div>
          </div>
          <div className="plans">
            <div>
              <img src={plan1} alt="" />
              <div className="buy-btn">
                <button>Buy Now</button>
              </div>
            </div>

            <div>
              <img src={require("../assests/plans/plane 2.png")} alt="" />
              <div className="buy-btn">
                <button>Buy Now</button>
              </div>
            </div>

            <div>
              <img src={require("../assests/plans/plane 3.png")} alt="" />
              <div className="buy-btn">
                <button>Buy Now</button>
              </div>
            </div>

            <div>
              <img src={require("../assests/plans/plane 4.png")} alt="" />
              <div className="buy-btn">
                <button>Buy Now</button>
              </div>
            </div>

            <div>
              <img src={require("../assests/plans/plane 5.png")} alt="" />
              <div className="buy-btn">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </> : <div>
        <h2 style={{color:"red"}}>You are not authorized</h2>
        <a href="/"> <h3> Back to Login</h3></a>
      </div>
    }
    </>
  );
}

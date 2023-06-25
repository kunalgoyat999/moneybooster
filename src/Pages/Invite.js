import React, { useRef } from "react";
import "../styles/Invite.css";
import backSvg from "../assests/Group 48096980.svg";

export default function Invite() {
    const textRef = useRef(null);

    const handleCopyText = () => {
        textRef.current.select();
        document.execCommand("copy");
      };
  return (
    <>
     <section className="invite-poster">
        <div className="header" >
        <button onClick={() => window.location.href="/index"}> <img src={require("../assests/back.png")} alt="" /> </button>
         <p className="invite-text">Invite</p>
         </div>
        <div className="shareImg">
            <img src={backSvg} alt="invite" />
        </div>
    </section>
    <section >
        <p>Invitation code</p>
        <div className="invitation-box">
            <input type="text" value="Vhogsbxhgsx" ref={textRef}/>
            <button onClick={()=> handleCopyText()}><img src={require("../assests/link_icon.png")}  alt="" /></button>
        </div>
        <p>Share this code to your friends and earn more.</p>
    </section>
    <section>
        <div className="agent-reward">
            <p>Agent Rewards</p>
            <p>Level 1=<span className="ref-bonus">25%</span></p>
            <p>Level 2=<span className="ref-bonus">3%</span></p>
            <p>Level 3=<span className="ref-bonus">2%</span></p>
        </div>
    </section>
    </>
  );
}

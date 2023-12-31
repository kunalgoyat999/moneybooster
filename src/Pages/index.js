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
import Axios  from "axios";
import { 
  Text, 
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import{ useNavigate, Link } from 'react-router-dom'

export default function () {
  let [auth, setAuth] = useState(true)
  let [userData, setUserData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [id, setId] = useState("");
  const [planNo, setPlan] = useState("");
  const [rechageModalIsOpen, setRechageModalIsOpen] = useState(false);
  let navigate = useNavigate();

  useEffect(()=> {
    let userId = localStorage.getItem("userId") || "";
    setId(userId);
    fetch(`https://cashbooster.info/api/v1/userDetails/homePage?id=${userId}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setAuth(true)
        setUserData(responseData.userDetails)
        localStorage.setItem("user", JSON.stringify(responseData.userDetails))
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  
  const handleRecharge = () => {
    // window.location.href = "http://localhost:3330/pay"
    window.location.href = "https://cashbooster.info/pay"
    
  }

  const handleButtonClick = () => {
    window.open('https://telegram.me/MoneyBooster1234', '_blank');
  };

  const buyPlan = (planNo) => {
    window.prompt("Are you sure you want to buy")
    console.log("planNo", planNo)
  }

  const handleOpenModal = (amt, plan) => {
    // if(userData.amountToBeUse > plan){
      if(userData.amountToBeUse != undefined) {
        setModalIsOpen(true);
        setAmount(amt)
        setPlan(plan)
      } else {
        setRechageModalIsOpen(true)
      }
      
  };

  const handleOpenModal1 = () => {
    console.log("ok")
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleOkay = () => {
    // Handle the "Okay" button click
    console.log('User clicked Okay');
    let data = {
      amount: amount,
      planNo: planNo
    }
    fetch(`https://cashbooster.info/api/v1/userDetails/buyplan?id=${id}`,{
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }
    ).then((response) => response.json())
     .then((res)=> {
       console.log("res", res)
       if(res.message === "Recharge Done"){
         alert("Recharge Successful")
         navigate('/index')
       } else {
         alert("Something went wrong")
       }
     })
    handleCloseModal();
  };

  const handleCancel = () => {
    console.log('User clicked Cancel');
    handleCloseModal();
  };

  const handleRechangeCloseModal = () => {
    setRechageModalIsOpen(false)
  }

  const handleRechargeCancel = () => {
    setRechageModalIsOpen(false)
  }

  const handleRechargeOkay = () => {
    window.location.href = "https://cashbooster.info/pay"
  }

  const handleRechargeOpenModal = () => {

  }

  const customStyles = {
    content: {
      width: '300px', // Set the width of the modal
      height: '200px', // Set the height of the modal
      margin: 'auto',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // backgroundColor: assets.color.LEFT_DRAWER_DEACTIVE_COLOR,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 4,
      width: '100%',
      marginBottom: 10,
    },
  };

  return (
    <>
    {
      auth ? 
      <>
      <nav id="home_heading">
        <h1>Money Booster</h1>
      </nav>
      <Carousel showThumbs={false} showStatus={false} autoPlay={true}  interval={2000}  >
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
          
          <button onClick={()=> navigate("/invite") }>
            <img style={{width: "12%"}} src={inviteSvg} alt="" /> <span>Invite people</span>
          </button>
          <button onClick={handleButtonClick}>
            <img style={{width: "12%"}} src={supportSvg} alt="" /> <span>Support</span>
          </button>
          <button onClick={()=> navigate("/withdraw")}>
            <img style={{width: "12%"}} src={withdrawSvg} alt="" /> <span>Withdraw</span>
          </button>
        </div>
      </section>
      <section>
        <div className="container">
          <div></div>
        <div className="demo-names">
          <div className="demo-name ">
          <Text as='abbr'>Asset</Text> 
           <Text as='abbr'>{userData.amountToBeUse === undefined ? 0 : userData.amountToBeUse}</Text>
        </div>
        <div className="demo-name ">
            <Text as='abbr'>Recharge</Text> 
            <Text as='abbr'>{userData.amounAdded === undefined ? 0 : userData.amounAdded}</Text>
         </div>
         <div className="demo-name ">
            <Text as='abbr'>Income</Text> 
             <Text as='abbr'>{userData.amountWithraw === undefined ? 0 : userData.amountWithraw}</Text>
         </div>
        </div>
        

          <div className="plans">
            <div>
              <img src={plan1} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal(490, 1)}>Buy Now</button>
              </div>
            </div>

            <div>
              <img src={require("../assests/plans/2.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal(1680, 2)}>Buy Now</button>
              </div>
            </div>

            <div>
              <img src={require("../assests/plans/3.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal(4860, 3)}>Buy Now</button>
              </div>
            </div>

            <div>
              <img src={require("../assests/plans/4.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal(13700, 4)}>Buy Now</button>
              </div>
            </div>

            <div>
              <img src={require("../assests/plans/5.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal(26800, 5)}>Buy Now</button>
              </div>
            </div>
            <div>
              <img src={require("../assests/plans/6.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal1(5, 5)} style={{backgroundColor: "gray"}}>Available Soon</button>
              </div>
            </div>
            <div>
              <img src={require("../assests/plans/7.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal1(5, 5)} style={{backgroundColor: "gray"}}>Available Soon</button>
              </div>
            </div>
            <div>
              <img src={require("../assests/plans/8.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal1(5, 5)} style={{backgroundColor: "gray"}}>Available Soon</button>
              </div>
            </div>
            <div>
              <img src={require("../assests/plans/9.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal1(5, 5)} style={{backgroundColor: "gray"}}>Available Soon</button>
              </div>
            </div>
            <div>
              <img src={require("../assests/plans/10.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal1(5, 5)} style={{backgroundColor: "gray"}}>Available Soon</button>
              </div>
            </div>
            <div>
              <img src={require("../assests/plans/11.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal1(5, 5)} style={{backgroundColor: "gray"}}>Available Soon</button>
              </div>
            </div>
            <div>
              <img src={require("../assests/plans/12.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal1(5, 5)} style={{backgroundColor: "gray"}}>Available Soon</button>
              </div>
            </div>
            <div>
              <img src={require("../assests/plans/13.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal1(5, 5)} style={{backgroundColor: "gray"}}>Available Soon</button>
              </div>
            </div>
            <div>
              <img src={require("../assests/plans/14.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal1(5, 5)} style={{backgroundColor: "gray"}}>Available Soon</button>
              </div>
            </div>
            <div>
              <img src={require("../assests/plans/Benefit Plane 1.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal1(5, 5)} style={{backgroundColor: "gray"}}>Available Soon</button>
              </div>
            </div>
            <div>
              <img src={require("../assests/plans/Benefit Plane 2.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal1(5, 5)} style={{backgroundColor: "gray"}}>Available Soon</button>
              </div>
            </div>
            <div>
              <img src={require("../assests/plans/Benefit Plane 3.png")} alt="" />
              <div className="buy-btn">
                <button onClick={()=> handleOpenModal1(5, 5)} style={{backgroundColor: "gray"}}>Available Soon</button>
              </div>
            </div>
            {/* <Modal
              isOpen={modalIsOpen}
              onRequestClose={handleCloseModal}
              contentLabel="Example Modal"
              style={customStyles}
            >
              <Text style={{fontSize: '25px'}}>MoneyBooster Plan</Text>
              <Text style={{fontSize: '14px'}}>Do you want to buy this plan?</Text>
              <button style={{background: "#D7937A"}} onClick={handleOkay}>Okay</button>
              <button style={{background: "#D7937A"}} onClick={handleCancel}>Cancel</button>
            </Modal> */}
            <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>MoneyBooster Plan</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Do you want to buy this plan?
                </ModalBody>

                <ModalFooter>
                  <Button variant='ghost'  onClick={handleCancel}>
                    Close 
                  </Button>
                  <Button colorScheme='blue' mr={3} onClick={handleOkay}>Confirm</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={rechageModalIsOpen} onClose={handleRechangeCloseModal}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>No Rechage!</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  You don't have any Recharge. Do you want to recharge?
                </ModalBody>

                <ModalFooter>
                  <Button variant='ghost'  onClick={handleRechargeCancel}>
                    Close 
                  </Button>
                  <Button colorScheme='blue' mr={3} onClick={handleRechargeOkay}>Yes</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
          <div style={{ width: 100, height: 50 }}>
          </div>
        </div>
      </section>
      </> : <div>
        <h2 style={{color:"red"}}>You are not authorized</h2>
        <Link to="/"><h3>Back to Login</h3></Link>
      </div>
    }
    </>
  );
}

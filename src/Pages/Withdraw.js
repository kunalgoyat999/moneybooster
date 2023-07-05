import "../styles/Withdraw.css";
import { useEffect, useState } from "react";

export default function Withdraw() {
    let [userData, setUserData] = useState({});
    let [withDrawAmount, setWithDrawAmount]  = useState(0);
    let [data, setData] = useState([])

    useEffect(()=> {
        let userId = localStorage.getItem("userId") || "";
        fetch(`http://localhost:3330/api/v1/userDetails/homePage?id=${userId}`
        )
          .then((response) => response.json())
          .then((responseData) => {
            setUserData(responseData.userDetails)
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      const withDraw = () => {
          let currentWithdrawalAmount = userData.amountToBeUse || 0;
          let data = {
              email: userData.email,
              amount: withDrawAmount
          }
          console.log("parseInt(withDrawAmount)", parseInt(withDrawAmount), "withDrawAmount", withDrawAmount)
          if(parseInt(currentWithdrawalAmount) - parseInt(withDrawAmount) < 0){
              alert("Your Assets are less than withdrawal Amount")
          } else {
            fetch("http://localhost:3330/api/v1/userDetails/withDrawAmount", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              })
                .then((response) => response.json())
                .then((responseData) => {
                  setData(responseData)
                  window.location.reload();
                })
                .catch((error) => {
                  // Handle any errors
                  console.error(error);
                });
          }
      }
      const handleInputChange = (event) => {
        setWithDrawAmount(event.target.value);
      };
  return (
    <>
      <nav>
        <button onClick={() => window.location.href="/index"}> <img src={require("../assests/back.png")} alt="" /> </button>
        <h1>Withdraw</h1>
    </nav>
    <section>
        <p> Tax 10%</p>
        <p>Assets : {userData.amountToBeUse === undefined ? 0 : userData.amountToBeUse} </p>

    <div className="withdraw-details">
        <div>
            <p>Name</p>
            <p>{userData.name}</p>
        </div>
        <div>
            <p>Email Id</p>
            <p>{userData.email}</p>
        </div>
        <div>
            <p>Bank account:</p>
            <p>{userData.accountNo === undefined? "-----" : userData.accountNo}</p>
        </div>
        
    </div>
    <div className="withdraw-detail">
    <input type="text" placeholder="Enter Withdrawl Amount" required value={withDrawAmount} onChange={handleInputChange}/>

        </div>
        <ul>
            <li>Your money will be transfer to your account within 6 hour.</li>

            <li>
                Fill in the IFSC code correctly, otherwise the withdrawal will fail.
            </li>
            <li>
                The actual arrival time of the withdrawals is subject to the processing time of the local bank.
            </li>
        </ul>
        <button onClick={withDraw}>Confirm</button>
    </section>
    </>
  );
}

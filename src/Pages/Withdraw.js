import "../styles/Withdraw.css";

export default function withdraw() {
  
  return (
    <>
      <nav>
        <button onClick={() => window.location.href="/index"}> <img src={require("../assests/back.png")} alt="" /> </button>
        <h1>Withdraw</h1>
    </nav>
    <section>
        <p> Tax 10%</p>
        <input type="text" required />
        <p>Assets : 0.00  <span>Withdraw all</span> </p>

    <div className="withdraw-details">
        <div>
            <p>phone number:</p>
            <p>9357******</p>
        </div>
        
        <div>
            <p>Bank account:</p>
            <p>3458245*****</p>
        </div>

        <div>
            <p>Withdrawal password:</p>
            <p>******</p>
        </div>
    </div>
        <ul>
            <li>Withdrawal time 7:30- 19:00</li>
            <li>
                Minimum withdrawal amount: 120 
            </li>
            <li>
                Fill in the IFSC code correctly, otherwise the withdrawal will fail.
            </li>
            <li>
                The actual arrival time of the withdrawals is subject to the processing time of the local bank.
            </li>
        </ul>
        <button>Confirm</button>
    </section>
    </>
  );
}

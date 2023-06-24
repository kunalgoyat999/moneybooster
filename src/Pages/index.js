import "../styles/index.css"
import plan1 from "../assests/plans/1.png"
import Image from "../assests/Image 3.png";

export default function () {

  fetch(`http://localhost:3330/api/v1/userDetails/getUser?email=${email}&password=${password}`
  )
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      if (responseData.success) {
        alert("Login successful");
        window.location.href = "/index";
      } else {
        alert("Invalid Email Id or Password");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <>
      <nav>
        <h1>Money Booster</h1>
      </nav>
      <section id="slider">
        <input type="radio" name="slider" id="s1" checked />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />
        <label for="s1" id="slide1">
          <img src={Image} alt="" />
        </label>
        <label for="s2" id="slide2">
          <img src={require("../assests/Image 2.png")} alt="" />
        </label>
        <label for="s3" id="slide3">
          <img src={require("../assests/Image 3.png")} alt="" />
        </label>
        <label for="s4" id="slide4">
          <img src={require("../assests/Image 1.png")} alt="" />
        </label>
        <label for="s5" id="slide5">
          <img src={require("../assests/Image 2.png")} alt="" />
        </label>
      </section>
      <section>
        <div class="btn-sec">
          <button>
            <img src={require("../assests/Group.svg")} alt="" /> <span>Recharge</span>{" "}
          </button>
          <button>
            <img src={require("../assests/invite.svg")} alt="" /> <span>Invite people</span>
          </button>
          <button>
            <img src={require("../assests/support.svg")} alt="" /> <span>Support</span>
          </button>
          <button>
            <img src={require("../assests/withdraw.svg")} alt="" /> <span>Withdraw</span>
          </button>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="transaction">
            <div>
              <p>assets</p>
              <p class="assest">0.00</p>
            </div>
            <div>
              <p>Recharge</p>
              <p class="recharge">1580</p>
            </div>
            <div>
              <p>Income</p>
              <p class="income">860</p>
            </div>
          </div>
          <div class="plans">
            <div>
              <img src={plan1} alt="" />
              <div class="buy-btn">
                <button>Buy Now</button>
              </div>
            </div>

            <div>
              <img src={require("../assests/plans/plane 2.png")} alt="" />
              <div class="buy-btn">
                <button>Buy Now</button>
              </div>
            </div>

            <div>
              <img src={require("../assests/plans/plane 3.png")} alt="" />
              <div class="buy-btn">
                <button>Buy Now</button>
              </div>
            </div>

            <div>
              <img src={require("../assests/plans/plane 4.png")} alt="" />
              <div class="buy-btn">
                <button>Buy Now</button>
              </div>
            </div>

            <div>
              <img src={require("../assests/plans/plane 5.png")} alt="" />
              <div class="buy-btn">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

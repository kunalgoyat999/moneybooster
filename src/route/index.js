import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Home from "../Pages"
import Withdraw from "../Pages/Withdraw"
import { Routes, Route} from 'react-router-dom';
import Invite from "../Pages/Invite";
import Payment from "../Pages/Payment";
import Response from "../Pages/Response";
import Forgot from "../Pages/Forgot";

export default function AllRoutes() {
    return (
      <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/index" element={<Home/>} />
          <Route path="/withdraw" element={<Withdraw/>} />
          <Route path="/invite" element={<Invite/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/response" element={<Response/>} />
          <Route path="/forgot" element={<Forgot/>} />
      </Routes>
    );
  }
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Home from "../Pages"
import Withdraw from "../Pages/Withdraw"
import { Routes, Route} from 'react-router-dom';
import Invite from "../Pages/Invite";
import Payment from "../Pages/Payment";
import Response from "../Pages/Response";
import Forgot from "../Pages/Forgot";
import { Otp } from "../Pages/otp";
import { Footer } from '../Pages/FooterNav/FooterNav';
import ProfilePage from "../Pages/Profile/Profile";
import TeamPage from "../Pages/Team/TeamPage";
import { BankPage } from "../Pages/bank/Bank";
import { ChangePassword } from "../Pages/ChangePassword";
import { PersonalDetailsPage } from "../Pages/PersonalDetails";
import AccountRecordPage from "../Pages/Account_Record/AccountRecordPage";
import PlanRecordPage from "../Pages/plan_record/PlanRecordPage";
export default function AllRoutes() {
    return (
      <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/register/:id" element={<Register/>} />
          <Route path="/otp" element={<Otp/>} />
          <Route path="/profile" element={<><ProfilePage/> <Footer /></>} />
          <Route path="/index" element={<><Home/><Footer /></>} />
          <Route path="/team" element={<><TeamPage/><Footer /></>} />
          <Route path="/withdraw" element={<Withdraw/>} />
          <Route path="/change-password" element={<ChangePassword/>} />
          <Route path="/my-bank" element={<BankPage/>} />
          <Route path="/personal" element={<PersonalDetailsPage/>} />
          <Route path="/transction" element={<AccountRecordPage/>} />PlanRecordPage
          <Route path="/plan-record" element={<PlanRecordPage/>} />
          <Route path="/invite" element={<Invite/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/response" element={<Response/>} />
          <Route path="/forgot" element={<Forgot/>} />
      </Routes>
    );
  }
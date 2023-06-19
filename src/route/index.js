import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Home from "../Pages"
import { Routes, Route} from 'react-router-dom';

export default function AllRoutes() {
    return (
      <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/index" element={<Home/>} />
          {/* <Route path="/contact" element={Contact} /> */}
          {/* <Route element={NotFound} /> */}
      </Routes>
    );
  }
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Login,
  Users,
  DetailsPage
}
  from "../Pages/index"
import { Navigate } from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";
import { useContext } from "react";

function Private(prop) {
  const {isLoggedIn} = useContext(AuthContext)
  if (!isLoggedIn) {
    return <Navigate to="/Login" />
  }
  else{
    <Navigate to="/Home"/>
  }
  return prop.children
}

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={
          <Private>
            <Contact />
          </Private>


        } />
        <Route path="/Login" element={<Login />} />
        <Route path="/Users" element={
          <Private>
            <Users />
          </Private>

        } />
        <Route path="/Users/:user_id" element={
          <Private>
            <DetailsPage />
          </Private>


        } />
      </Routes>
    </div>
  );
};

export default AllRoutes;

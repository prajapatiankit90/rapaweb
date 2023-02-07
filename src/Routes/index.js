import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Calc from "../container/User/Calc/Calc";
import Login from "../container/User/Login/Login";
import Signup from "../container/User/Signup/Signup";

import PrivateOutlet from "./ProtectedRoutes";

const Root = () => {

    const isAuthenticated = !!localStorage.getItem("token");
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
            exact
            path="/calc"
            element={
              <PrivateOutlet>
                <Calc />
              </PrivateOutlet>
            }
          />

        {/* <Route path="/" element={<Outlet />}>
          <Route path="/calc" element={<Calc />} />
          
        </Route> */}
       
      </Routes>
    </BrowserRouter>
  );
};

export default Root;

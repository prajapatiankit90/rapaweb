import React from "react";
import { Navigate} from "react-router-dom";

const PrivateOutlet = ({children}) => {
  const login = localStorage.getItem("token");
  
  return login  ? children: <Navigate to="/login" />;
};
export default PrivateOutlet;

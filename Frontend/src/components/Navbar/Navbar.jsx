import React from "react";
import logo from "../../assets/icon.png";
import Profile from "../Cards/Profile";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate;

  const onLogout = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <div className="flex items-center">
        <img src={logo} alt="AlgoNote logo" className="h-9 w-9 mr-2" />
        <h2 className="text-2xl font-medium text-black py-2">AlgoNote</h2>
      </div>

      <Profile className="ml-auto" onLogout={onLogout} />
    </div>
  );
};

export default Navbar;

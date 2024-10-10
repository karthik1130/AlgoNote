import React from "react";
import logo from "../../assets/icon.png";

const Navbar = () => {
  return (
    <div className="bg-white flex items-center justify-left px-6 py-2 drop-shadow">
      <img src={logo} alt="AlgoNote logo" className="h-9 w-9 mr-2" />
      <h2 className="text-2xl font-medium text-black py-2">AlgoNote</h2>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import logo from "../../assets/icon.png";
import Profile from "../Cards/Profile";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <div className="flex items-center">
        <img src={logo} alt="AlgoNote logo" className="h-9 w-9 mr-2" />
        <h2 className="text-2xl font-medium text-black py-2">AlgoNote</h2>
      </div>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <div>
        <Profile className="ml-auto" onLogout={onLogout} />
      </div>
    </div>
  );
};

export default Navbar;

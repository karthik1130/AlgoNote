import React, { useState } from "react";
import logo from "../../assets/icon.png";
import Profile from "../Cards/Profile";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ userInfo, onSearchNote }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const link = "http://localhost:5173/dashboard";

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <div className="flex items-center">
        <img src={logo} alt="AlgoNote logo" className="h-9 w-9 mr-2 cursor-pointer" />
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
        <Profile className="ml-auto" userInfo={userInfo} onLogout={onLogout} />
      </div>
    </div>
  );
};

export default Navbar;

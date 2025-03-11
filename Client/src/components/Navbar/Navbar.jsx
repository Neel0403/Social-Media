import React, { useContext } from "react";
import { IoSearch, IoPersonSharp, IoChatboxEllipses, IoIosNotifications } from "react-icons/io5";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import noProfilePic from "../../pages/Profile/assets/user.png";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div
      className="h-[50px] w-full bg-green-600 flex items-center fixed top-0 left-0 z-50 px-4"
      style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="left" style={{ flex: 3 }}>
        <Link to={"/"}>
          <div className="logodiv cursor-pointer">
            <Logo />
          </div>
        </Link>
      </div>
      <div className="center" style={{ flex: 5 }}>
        <div className="searchBar w-full h-[30px] bg-white rounded-xl flex items-center">
          <IoSearch className=" text-lg ml-[10px]" />
          <input
            type="text"
            className="search w-full focus:outline-none m-[10px] bg-transparent"
          />
        </div>
      </div>
      <div
        className="right flex items-center justify-around text-white"
        style={{ flex: 4 }}
      >
        <div className="tabLinks text-lg cursor-pointer flex gap-[10px]">
          <span className="tabLink1 font-bold">Home</span>
          <span className="tablink2 font-bold">Timeline</span>
        </div>
        <div className="tabIcons flex text-xl gap-[10px]">
          <div className="tabIcon1 cursor-pointer relative">
            <IoPersonSharp className="text-2xl" />
            <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
              1
            </span>
          </div>
          <div className="tabIcon1 cursor-pointer relative">
            <IoChatboxEllipses className="text-2xl" />
            <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
              1
            </span>
          </div>
          <div className="tabIcon1 cursor-pointer relative">
            <IoIosNotifications className="text-2xl" />
            <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
              1
            </span>
          </div>
        </div>
        <div className="profilePicDiv ml-4">
          <Link to={`/profile/${user?.username}`}>
            <img
              src={user?.profilePicture ? user.profilePicture : noProfilePic}
              alt="User Profile Picture"
              className="w-[32px] h-[32px] object-cover rounded-full cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

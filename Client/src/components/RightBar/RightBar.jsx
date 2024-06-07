import React from "react";
import birthDayIcon from "../../assets/gift.png";
import profilePic from "../../assets/profilePic.png";
import adImage from "../../assets/ad.jpg";
import OnlineUsers from "../OnlineUsers/OnlineUsers";
import { Users } from "../../data/dummyData";

const RightBar = ({ user }) => {
  const RightBarHome = () => {
    return (
      <>
        <div className="flex items-center">
          <img
            src={birthDayIcon}
            alt="Birthday Icon"
            className="w-[40px] h-[40px] mr-[10px]"
          />
          <span className="font-semibold text-md">
            <b>Neel Oza</b> and<b> 3 others</b> have birthday today
          </span>
        </div>
        <img
          src={adImage}
          alt="Advert Image"
          className="w-full rounded-lg mt-[30px] mb-[30px]"
        />
        <h1 className="font-bold text-lg mb-[20px]">Online</h1>
        <ul className="m-0 p-0">
          {Users.map((user) => (
            <OnlineUsers key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const RightBarProfile = () => {
    return (
      <>
        <h1 className="font-bold text-xl mb-[10px]">User Information</h1>
        <div className="mb-[30px]">
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              City:
            </span>
            <span>{user.city}</span>
          </div>
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              From:
            </span>
            <span>{user.from}</span>
          </div>
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              Relationship:
            </span>
            <span>{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "Prefer not to say"}</span>
          </div>
          <h1 className="font-bold text-xl mb-[10px]">Friends</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="">
              <img
                src={profilePic}
                alt="User Picture"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Derrick Kello</span>
            </div>
            <div>
              <img
                src={profilePic}
                alt="User Picture"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Derrick Kello</span>
            </div>
            <div>
              <img
                src={profilePic}
                alt="User Picture"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Derrick Kello</span>
            </div>
            <div>
              <img
                src={profilePic}
                alt="User Picture"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Derrick Kello</span>
            </div>
            <div>
              <img
                src={profilePic}
                alt="User Picture"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Derrick Kello</span>
            </div>
            <div>
              <img
                src={profilePic}
                alt="User Picture"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Derrick Kello</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div style={{ flex: 3.5, zIndex: -1 }} className="">
      <div className="pt-[20px] pr-[20px]">
        {user ? <RightBarProfile /> : <RightBarHome />}
      </div>
    </div>
  );
};

export default RightBar;

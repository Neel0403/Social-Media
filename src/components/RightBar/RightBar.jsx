import React from "react";
import birthDayIcon from "../../assets/gift.png";
import adImage from "../../assets/ad.jpg";
import profilePic from "../../assets/profilePic.png";
import OnlineUsers from "../OnlineUsers/OnlineUsers";
import { Users } from "../../data/dummyData";

const RightBar = () => {
  return (
    <div style={{ flex: 3.5, zIndex: -1 }} className="">
      <div className="pt-[20px] pr-[20px]">
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
      </div>
    </div>
  );
};

export default RightBar;

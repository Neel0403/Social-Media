import React from "react";
import birthDayIcon from "../../assets/gift.png";
import adImage from "../../assets/ad.jpg";
import profilePic from "../../assets/profilePic.png";

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
          <li className="flex items-center mb-[10px]">
            <div className="mr-[10px] relative">
              <img
                src={profilePic}
                alt="Profile Picture"
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <span className="w-[12px] h-[12px] rounded-full bg-green-500 absolute top-[-1px] right-0 border-[2px] border-white"></span>
            </div>
            <span className="font-bold">ABC XYZ</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightBar;

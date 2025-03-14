import React from "react";

const OnlineUsers = ({ user }) => {
  return (
    <li className="flex items-center mb-[10px]" key={user.id}>
      <div className="mr-[10px] relative">
        <img
          src={user.profilePicture}
          alt="Profile Picture"
          className="w-[40px] h-[40px] object-cover rounded-full"
        />
        <span className="w-[12px] h-[12px] rounded-full bg-green-500 absolute top-[-1px] right-0 border-[2px] border-white"></span>
      </div>
      <span className="font-bold">{user.username}</span>
    </li>
  );
};

export default OnlineUsers;

import React, { useContext, useEffect, useState } from "react";
import birthDayIcon from "../../assets/gift.png";
import profilePic from "./assets/no-profile-image.png";
import adImage from "../../assets/ad.jpg";
import OnlineUsers from "../OnlineUsers/OnlineUsers";
import { Users } from "../../data/dummyData";
import { toast } from "react-toastify"
import { followUser, getUserFriends, unfollowUser } from "../../utils/api/api";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom"

const RightBar = ({ user }) => {
  const [friends, setFriends] = useState([])
  const { user: currentUser, dispatch } = useContext(AuthContext)
  const [isFollowed, setIsFollowed] = useState(currentUser?.followings?.includes(user?._id))

  useEffect(() => {
    setIsFollowed(currentUser?.followings?.includes(user?._id));
  }, [currentUser, user?._id])

  useEffect(() => {
    if (user?._id) {
      const getFriends = async () => {
        try {
          const res = await getUserFriends(user?._id)
          setFriends(res.data.friends)
          console.log(res.data);
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong")
        }
      }
      getFriends();
    }
  }, [user?._id]);

  const handleFollow = async () => {
    try {
      if (isFollowed) {
        await unfollowUser(currentUser._id, user._id);
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await followUser(currentUser._id, user._id)
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (error) {
      console.log(error);
    }
    setIsFollowed(!isFollowed)
  }

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
        {user.username !== currentUser?.username && (
          <button className="bg-green-600 text-white mt-10 mb-5 px-5 py-2 rounded-md cursor-pointer hover:bg-green-700 transition" onClick={handleFollow}>
            {isFollowed ? "Following" : "Follow"}
          </button>
        )}
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
            <span>{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "Prefer not to say"}
            </span>
          </div>
          <h1 className="font-bold text-xl mb-[10px]">Friends</h1>
          <div className="grid grid-cols-3 gap-4">
            {friends.map((friend) => (
              <Link to={`/profile/${friend?.username}`} key={friend._id} >
                <div className="flex flex-col items-center">
                  <img
                    src={
                      friend.profilePicture ? friend.profilePicture : profilePic
                    }
                    alt="User Picture"
                    className="w-[100px] h-[100px] object-cover rounded-md"
                  />
                  <span>{friend.username}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div style={{ flex: 3.5 }} className="">
      <div className="pt-[20px] pr-[20px]">
        {user ? <RightBarProfile /> : <RightBarHome />}
      </div>
    </div>
  );
};

export default RightBar;

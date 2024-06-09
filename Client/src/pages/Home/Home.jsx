import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import RightBar from "../../components/RightBar/RightBar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <NewsFeed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;

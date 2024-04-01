// import { Button } from "components/button";
import React from "react";

import Button from "../../components/button/Button";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
// import { getAdditionalUserInfo } from "firebase/auth";

const DashboardHeader = () => {
  const { userInfo } = useAuth();
  return (
    <div className="flex h-[60px] justify-between px-[100px] border-b-2 py-2 border-[#e8e8e8]">
      <div className="h-full flex  items-center">
        <NavLink to="/">
          <img
            className="h-full w-[60px] object-cover"
            src="/logo1.png"
            alt=""
          />
        </NavLink>
        <span className=" px-5 text-[#df0341] text-xl font-bold hidden lg:inline-block">
          Citrus Blush Blogs
        </span>
      </div>
      <div className="h-full flex items-center">
        <Button to="/manage/add-post" className="h-full">
          Write new post
        </Button>
        <Link to="/profile" className="header-avatar">
          {/* <img src={getAdditionalUserInfo?.avatar} alt="" /> */}
          {/* <div className="h-full px-5">
            <img
              className="h-[50px] w-[50px] rounded-full object-cover"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
              alt=""
            />
          </div> */}
          <img
            className="h-[50px] w-[50px] rounded-full object-cover"
            src={userInfo?.avatar}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default DashboardHeader;

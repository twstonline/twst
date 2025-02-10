import React from "react";
import { Sidebar } from "flowbite-react";
import { MdOutlineDashboard } from "react-icons/md";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { PiAddressBook } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

const UserProfileNavigation = () => {
  return (
    <Sidebar className="z-50" >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={MdOutlineDashboard}>
            <Link to="/profile/dashboard">Dashboard</Link>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={BsFillFileEarmarkCheckFill}>
            <Link to="/profile/orders">Orders</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={PiAddressBook}>
            <Link to="/profile/address">Address</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={RxAvatar}>
            <Link to="/profile/user_profile">MyProfile</Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default UserProfileNavigation;

import { Drawer } from "flowbite-react";
import { useState } from "react";
import { HiBars2, HiSquaresPlus } from "react-icons/hi2";
import { MdOutlineDashboard } from "react-icons/md";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { PiAddressBook } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

export function UserProfileMobileNav() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center">
        {/* <Button onClick={() => setIsOpen(true)}>Show swipeable drawer</Button> */}
      </div>
      <Drawer
        edge
        open={isOpen}
        onClose={handleClose}
        position="bottom"
        className="p-0 "
      >
        <Drawer.Header
          closeIcon={HiBars2}
          titleIcon={HiSquaresPlus}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer px-4 pt-4  hover:bg-gray-50 dark:hover:bg-gray-700"
        />
        <Drawer.Items className="p-4">
          <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4">
            <Link to="/profile/dashboard">
              <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                  <MdOutlineDashboard />
                </div>
                <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                  Dashboard
                </div>
              </div>
            </Link>
            <Link to="/profile/orders">
              <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                  <BsFillFileEarmarkCheckFill />
                </div>
                <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                  Orders
                </div>
              </div>
            </Link>
            <Link to="/profile/address">
              <div className=" cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 lg:block dark:bg-gray-700 dark:hover:bg-gray-600">
                <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                  <PiAddressBook />
                </div>
                <div className=" text-center font-medium text-gray-500 dark:text-gray-400">
                  Address
                </div>
              </div>
            </Link>
            <Link to="/profile/user_profile">
              <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                  <RxAvatar />
                </div>
                <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                  MyProfile
                </div>
              </div>
            </Link>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <CiLogout />
              </div>
              <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                Logout
              </div>
            </div>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default UserProfileMobileNav;

// import React from "react";
// import UserProfileNavigation from "../component/navigation/UserProfileNavigation";

// const UserLayout = ({ children }) => {
//   return (
//     <div>
//       <div className="w-full h-screen flex ">
//         <nav className="w-1/6 h-screen bg-red-400">
//           <UserProfileNavigation />
//         </nav>
//         <main className="h-screen overflow-scroll productPhoto">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default UserLayout;

import React from "react";
import UserProfileNavigation from "../component/navigation/UserProfileNavigation";
import { Outlet } from "react-router-dom";
import NavigationBar from "../component/navigation/NavigationBar";
import UserProfileMobileNav from "../component/navigation/UserProfileMobileNav";

const UserLayout = () => {
  return (
    <>
      <div className="sticky top-0 w-full h-screen flex flex-col">
        <div className="w-full">
          <NavigationBar />
        </div>
           
        <div className="flex flex-grow gap-0 h-full">
          
          <nav className="h-full  bg-blue-500 p-0 m-0 hidden lg:block">
            <UserProfileNavigation />
          </nav>
          <nav className="h-full  bg-blue-500 p-0 m-0 block lg:hidden">
            <UserProfileMobileNav/>
          </nav>

          {/* Main Content */}
          <main className="flex-grow overflow-scroll productPhoto p-0 m-0">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default UserLayout;

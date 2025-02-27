// import React from "react";
// import NavigationBar from "../component/navigation/NavigationBar";
// import Footer from "../component/footer/Footer";
// import FeaturesSection from "../component/feature/FeatureSection";

// const Layout = ({ children }) => {
//   return (
//     <>
//       <NavigationBar />
//       <main>{children}</main>
//       <footer className=" ">
//         <FeaturesSection />
//         <Footer />
//       </footer>
//     </>
//   );
// };

// export default Layout;
import React from "react";
import NavigationBar from "../component/navigation/NavigationBar";
import Footer from "../component/footer/Footer";
import FeaturesSection from "../component/feature/FeatureSection";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 w-full z-[1000]">
        <NavigationBar />
      </div>
      <main className="flex-grow pt-16"> {/* pt-16 accounts for navbar height */}
        <Outlet />
      </main>
      <footer>
        <FeaturesSection />
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

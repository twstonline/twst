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
    <>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <footer>
        <FeaturesSection />
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

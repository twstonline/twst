import { Drawer, Sidebar } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
// import {openMobileNav} from '../../utils/slice/generalSlice'
import { openMobileNav } from "../../redux/actions/generalActions.js";
import { FaShoppingBag } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
// import { CiLocationOn } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiShoppingBag, } from "react-icons/hi";

const MobilNav = () => {
  const dispatch = useDispatch()
  const { openNav } = useSelector((store) => store.general)

  return (
    <>
      <Drawer open={openNav} onClose={() => dispatch(openMobileNav())}>


        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>

                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={FaShoppingBag}>
                      Shop
                    </Sidebar.Item>
                    <Sidebar.Item href="/e-commerce/products" icon={HiShoppingBag}>
                      About
                    </Sidebar.Item>
                    <Sidebar.Item href="/users/list" icon={RiContactsLine}>
                      Contact
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-in" icon={CiLogin}>
                      Login
                    </Sidebar.Item>
                    {/* <Sidebar.Item href="/authentication/sign-in" icon={CiLocationOn}>
                      Location
                    </Sidebar.Item> */}
                    <Sidebar.Item href="/authentication/sign-up" icon={IoCartOutline}>
                      Cart
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>

                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default MobilNav
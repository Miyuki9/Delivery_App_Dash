import { FaBabyCarriage } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../../store";

function Sidebar() {
  const products = useStore((state) => state.products);
  const location = useLocation()

  return (
    <div className="w-[250px] h-screen overflow-y-scroll bg-black text-white pt-5">
      <div className="flex gap-x-5 items-center border-b px-4 py-2 mx-1">
        <div className="p-2 bg-white text-black rounded-full">
          <FaBabyCarriage />
        </div>
        <div className="">Delivery App</div>
      </div>

      <Link to="/dashboard/products">
        <div className={`flex gap-x-5 items-center px-4 py-2 mt-2 cursor-pointer ${location.pathname == "/dashboard/products" && "bg-blue-500"} hover:bg-blue-500 mx-1 rounded-full`}>
          <div className="p-2 ">
            <AiFillDashboard className="text-xl" />
          </div>
          <div className="">Products</div>

          <div className="">{products}</div>
        </div>
      </Link>

      <Link to="/dashboard/sales">
        <div className={`flex gap-x-5 items-center px-4 py-2 mt-2 cursor-pointer ${location.pathname == "/dashboard/sales" && "bg-blue-500"} hover:bg-blue-500 mx-1 rounded-full`}>
          <div className="p-2 ">
            <FaCartPlus className="" />
          </div>
          <div className="">Sales</div>
        </div>
      </Link>

      <Link
        to="/dashboard/upload"
        className={`flex gap-x-5 items-center px-4 py-2 mt-2 cursor-pointer ${location.pathname == "/dashboard/upload" && "bg-blue-500"} hover:bg-blue-500 mx-1 rounded-full`
        }>
        <div className="p-2 ">
          <FaUpload className="" />
        </div>
        <div className="">Upload</div>
      </Link>
      <Link
        to="/dashboard/addon"
        className={`flex gap-x-5 items-center px-4 py-2 mt-2 cursor-pointer ${location.pathname == "/dashboard/addon" && "bg-blue-500"} hover:bg-blue-500 mx-1 rounded-full`}
      >
        <div className="p-2 ">
          <IoFastFood className="" />
        </div>
        <div className="">Addon</div>
      </Link>
      <Link
        to="/dashboard/categories"
        className={`flex gap-x-5 items-center px-4 py-2 mt-2 cursor-pointer ${location.pathname == "/dashboard/categories" && "bg-blue-500"} hover:bg-blue-500 mx-1 rounded-full`}
      >
        <div className="p-2 ">
          <TbCategoryPlus className="" />
        </div>
        <div className="">Categories</div>
      </Link>
    </div>
  );
}

export default Sidebar;